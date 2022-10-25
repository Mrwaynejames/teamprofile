const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");

employeeArr = []

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
            .then(function (choice) {
                switch(choice.addEmp) {
                    case "Manager":
                        newManager();
                    case "Engineer":
                        newEngineer();
                    case "Intern":
                        newIntern();
                    case "I'm okay my team is complete":
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
            const manager = new Manager(response.mName, response.mID, response.mEmail, response.mOffice);
            employeeArr.push(manager);
            newEmp();
        });
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
        ]).then(response => {
            const engineer = new Engineer(response.eName, response.eID, response.eEmail, response.github);
            employeeArr.push(engineer);
            newEmp();
        });
    }

    function newIntern() {
        inquirer
            .prompt([
                {
                type: 'input',
                message: 'What is the intern name?',
                name: 'iName'
                },
                {
                type: 'number',
                message: 'What is the intern ID number?',
                name: 'iID'
                },
                {
                type: 'input',
                message: 'What is the intern email address?',
                name: 'iEmail'
                },
                {
                type: 'input',
                message: "What school did/does the intern attend?",
                name: 'school'
                },
            ]).then(response => {
                const intern = new Manager(response.iName, response.iID, response.iEmail, response.school);
                employeeArr.push(intern);
                newEmp();
            });
        }
    }

    function complete(){
        console.log ("Here is your team!")
        
    }