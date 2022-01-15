const {
   makeTeamFile,
   generateCardHTML,
   generateEmployeeSubtitleText,
   generateEmployeeInfoList
 } = require('../lib/makeTeamFile.js');
 const Employee = require('../lib/Employee.js');
 const Engineer = require('../lib/Engineer.js');
 const Intern = require('../lib/Intern.js');
 const Manager = require('../lib/Manager.js');
 
 describe('generateEmployeeSubtitleText', () => {
   it("returns a string", ()=> {
     const employee = new Employee("Johnny", 1, "abc@123.com");
     expect(typeof generateEmployeeSubtitleText(employee)).toEqual("string");
   });
   it("includes the role of the employee", () => {
     const employee = new Employee("Johnny", 1, "abc@123.com");
     const manager = new Manager("Jane", 2, "j@b.c", "101");
     const engineer = new Engineer("Joe", 3, "joe@b.c", "joejoejoejoe");
     const intern = new Intern("Jack", 4, "jack@b.c", "JOSU");
 
     expect(generateEmployeeSubtitleText(employee).includes(employee.getRole())).toBeTruthy();
     expect(generateEmployeeSubtitleText(manager).includes(manager.getRole())).toBeTruthy();
     expect(generateEmployeeSubtitleText(engineer).includes(engineer.getRole())).toBeTruthy();
     expect(generateEmployeeSubtitleText(intern).includes(intern.getRole())).toBeTruthy();
   });
 });
 
 describe('generateEmployeeInfoList', () => {
   it("returns a string", ()=> {
     const employee = new Employee("Johnny", 1, "abc@123.com");
     expect(typeof generateEmployeeInfoList(employee)).toEqual("string");
   });
   it("includes the employee's ID", () => {
     const employee = new Employee("Johnny", 1234, "abc@123.com");
     expect(generateEmployeeInfoList(employee).includes(employee.getId())).toBeTruthy();
   });
   
   it("includes a mailto link and the employee's email if the employee has an email", () => {
     const employee = new Employee("Johnny", 1234, "abc@123.com");
     const mailtoLinkText = `mailto:${employee.getEmail()}`
     expect(generateEmployeeInfoList(employee).includes(mailtoLinkText)).toBeTruthy();
   });
   it("does not include a mail to link if the employee doesn't have an email", () => {
     const employee = new Employee("Johnny", 1234);
     const mailtoLinkText = `mailto:`
     expect(generateEmployeeInfoList(employee).includes(mailtoLinkText)).toBeFalsy();
   });
   it("manager's office number", () => {
     const manager = new Manager("Courtney", 2, "CS@mail.com", "101");
     expect(generateEmployeeInfoList(manager).includes(manager.getOfficeNumber())).toBeTruthy();
   });
   it("links to an engineer's github page", () => {
     const engineer = new Engineer("Joey", 3, "joey@mail.com", "Joeyjoejoe");
     const githubLinkText = `<a href="https://github.com/${engineer.getGithub()}" target="_blank">`;
     expect(generateEmployeeInfoList(engineer).includes(githubLinkText)).toBeTruthy();
   });
   it("intern's school", () => {
     const intern = new Intern("Bob", 4, "Bob@mail.com", "Allstate");
     expect(generateEmployeeInfoList(intern).includes(intern.getSchool())).toBeTruthy();
   });
 });