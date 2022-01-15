# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A simple team profile web page generator implemented in JavaScript on node.js using the inquirer.js library. Generates a single HTML and uses Bootstrap (via CDN) for styling.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

You must have node installed to use this program.

At the command line terminal of your choice type the following:

```
git clone https://github.com/jtdizzle/Team-Profile-Generator
cd Team-Profile-Generator
npm install
```

## Usage

At the directory where you installed this program, type the following on the command-line:

```
node index.js
```

The program will ask you a series of questions about the team, starting with the team name and information about the team manager. After you finish entering the information for a team member, the program will ask if you want to add another team member.  

![Screenshot of text prompt](./screen_captures/prompt_sequence_screenshot.png)

When you answer 'no' to adding another team member, the program will create the output file `index.html` in the `dist/` subdirectory. Note that it will overwrite any previous files you may have left there.

![Screenshot of sample output] (Screenshot 2022-01-15 161625.jpg)

See the [samples](./samples) folder for examples of the output produced.

### Notes about questions

- Required fields: team names, team members' names, and employee IDs
- Optional fields: email addresses, manager's office number, engineers' GitHub usernames, and interns' school names
- Email addresses must have an atmark (@) surrounded by at least one alphanumeric character on both sides.
- Employee IDs must be non-negative integers.

### Demo

A video demo of the program is available [here](./screen_captures/demo.mp4).

## Tests

Run `npm test` to execute Jest unit tests.

## Questions

If you have any questions, feel free to reach out via one of the following:

- Email: [jtdizzle747@yahoo.com](mailto:jtdizzle747@yahoo.com)
- Github: [@jtdizzle](https://github.com/jtdizzle)

## License

This application is distributed under the terms of the [MIT License](./LICENSE).  
Required fields: team names, team members' names, and employee IDs  
Optional fields: email addresses, manager's office number, engineers' GitHub usernames, and interns' school names  
Email addresses must have an atmark (@) surrounded by at least one alphanumeric character on both sides.  
Employee IDs must be non-negative integers.  
Demo  
A video demo of the program is available here.

Tests  
Run npm test to execute Jest unit tests.

Questions  
If you have any questions, feel free to reach out via one of the following:

Email: jtdizzle747@yahoo.com
Github: jtdizzle
License
This application is distributed under the terms of the MIT License.
