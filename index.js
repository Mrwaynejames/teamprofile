const inquirer = require("inquirer");
const fs = require("fs");

function manager() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is the manager name?',
            name: 'mName'
            },
            {
            type: 'number',
            message: 'What is the manager ID number?',
            name: 'mID'
            },
            {
            type: 'input',
            message: 'What is the manager email address?',
            name: 'mEmail'
            },
            {
            type: 'number',
            message: 'What is the manager office number?',
            name: 'mOffice'
            },
        ])
}
