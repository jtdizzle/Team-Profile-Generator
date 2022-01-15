Team Profile Generator License: MIT
Description
A simple team profile web page generator implemented in JavaScript on node.js using the inquirer.js library. Generates a single HTML and uses Bootstrap (via CDN) for styling.

Contents
Installation
Usage
Tests
Questions
License
Installation
You must have node installed to use this program.

At the command line terminal of your choice type the following:

git clone https://github.com/jtdizzle/team-Profile-Generator
cd team_profile_generator
npm install
Usage
At the directory where you installed this program, type the following on the command-line:

node index.js
The program will ask you a series of questions about the team, starting with the team name and information about the team manager. After you finish entering the information for a team member, the program will ask if you want to add another team member. You can answer 'no' to that question to stop and have the program generate the file, or answer 'yes' to continue.

Screenshot of text prompt

When you answer 'no' to adding another team member, the program will create the output file index.html in the dist/ subdirectory. Note that it will overwrite any previous files you may have left there.

Screenshot of sample output

See the samples folder for examples of the output produced.

Notes about questions
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