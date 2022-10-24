const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");


function teamMembers () {

    function newEmp () {
        inquirer
            .prompt([{
                type: 'list',
                message: 'what type of team member would you like to add?',
                name: 'addEmp',
                Choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "I'm okay my team is complete"]
                }])
            .then(function (input) {
                switch(input.addEmployees) {
                    case "manager":
                        newManager();
                    case "engineer":
                        newEngineer();
                    case "intern":
                        newIntern();
                    default:
                        complete();
                }})
            }

function newManager() {
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
            }
        ]).then(response => {
            const 
        })
}
}

function newEngineer() {
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

    function newIntern() {
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
