const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inputValidator = require('./lib/inputValidator.js');
const {makeTeamFile} = require('./lib/makeTeamFile.js');


let team = {name: '', employees: [] };

const trimString = str => str.trim();

let highestIdEntered = 0;

const initialQuestions = [
  {
    type: 'input',
    name: 'teamName',
    message: "Team Name's",
    default: 'My Team',
    filter: trimString,
    validate: inputValidator.validateTeamName
  },
  {
    type: 'input',
    name: 'name',
    message: "Manager's Name",
    filter: trimString,
    validate: inputValidator.validateEmployeeName
  },
  {
    type: 'number',
    name: 'id',
    message: answers => `${answers.name}'s Employee ID`,
    default: () => highestIdEntered + 1,
    validate: inputValidator.validateId
  },
  {
    type: 'input',
    name: 'email',
    message: answers => `${answers.name}'s Email Address`,
    filter: trimString,
    validate: inputValidator.validateEmail
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: answers => `${answers.name}'s Office Number`,
    filter: trimString
  }
];

const addAnotherQuestion = [
  {
    type: 'confirm',
    name: 'addAnother',
    message: 'Would you like to add another team member?'
  }
];

const employeeQuestionList = [
  {
    type: 'list',
    name: 'typeOfEmployee',
    message: 'What role will this person have?',
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter employee name',
    filter: trimString,
    validate: inputValidator.validateEmployeeName
  },
  {
    type: 'number',
    name: 'id',
    message: answers => `${answers.name}'s new Employee ID`,
    default: () => highestIdEntered + 1,
    validate: inputValidator.validateId
  },
  {
    type: 'input',
    name: 'email',
    message: answers => `${answers.name}'s new Email Address`,
    filter: trimString,
    validate: inputValidator.validateEmail
  },
  {
    type: 'input',
    name: 'github',
    message:  answers => `${answers.name}'s GitHub Account Name is`,
    filter: trimString,
    when: answers => answers.typeOfEmployee === 'Engineer'
  },
  {
    type: 'input',
    name: 'school',
    message:  answers => `${answers.name}'s School's Name`,
    filter: trimString,
    when: answers => answers.typeOfEmployee === 'Intern'
  }
];

function promptToAddAnother() {
  inquirer.prompt(addAnotherQuestion).then(answers => {
    if (answers.addAnother) {
      promptForNextEmployee();
    } else {
      makeTeamFile(team);
    }
  })
}

function promptForNextEmployee() {
  inquirer.prompt(employeeQuestionList).then(answers => {
    let employee; 
    const {name, id, email, github, school} = answers;
    highestIdEntered = Math.max(id, highestIdEntered);
    if (answers.typeOfEmployee === "Engineer") {
      employee = new Engineer(name, id, email, github);
    } else {
      employee = new Intern(name, id, email, school);
    }
    team.employees.push(employee);
    promptToAddAnother();
  });
}



inquirer.prompt(initialQuestions).then(answers => {
  const {teamName, name, id, email, officeNumber } = answers;
  highestIdEntered = id;

  team.name = teamName;
  team.employees.push(new Manager(name, id, email, officeNumber));
  promptToAddAnother();
});