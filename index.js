const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");


function teamMembers () {
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
            {
            type: 'list',
            message: 'what type of team member would you like to add?',
            name: 'addEmp',
            Choices: [
                "Engineer",
                "Intern",
                "I'm okay my team is complete"
            ]
            },
        ])
}
.then(function (response) {
switch(response.addEmployees) {
    case "engineer":
        addEngineer();
    case "intern":
        addIntern();
    default:
        complete();
}
})
}

function engineer() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is the engineer name?',
            name: 'eName'
            },
            {
            type: 'number',
            message: 'What is the engineer ID number?',
            name: 'eID'
            },
            {
            type: 'input',
            message: 'What is the engineer email address?',
            name: 'eEmail'
            },
            {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github'
            },
        ])
    }

    function intern() {
        inquirer
            .prompt([
                {
                type: 'input',
                message: 'What is the intern name?',
                name: 'eName'
                },
                {
                type: 'number',
                message: 'What is the intern ID number?',
                name: 'eID'
                },
                {
                type: 'input',
                message: 'What is the intern email address?',
                name: 'eEmail'
                },
                {
                type: 'input',
                message: "What school did/does the intern attend?",
                name: 'school'
                },
            ])
        }
