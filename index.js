const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");
const layout = require("./layout.js");
const index = require("./index.js");

// const htmlskeleton = (employeeArr) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//     <title>Document</title>
// </head>
// <body>
//     <header class="jumbotron jumbotron-fluid text-center bg-success">
//         <div class="container">
//             <h1 class="display-6">Team Profile</h1>
//         </div>
//     </header>

//     <main class="container">
//         <section> 
//             <div>${employeeArr}</div>  
//         </section>

//     </main>
// </body>
// </html>`;

const employeeArr = []

function teamMembers () {

    function newEmp () {
        inquirer
            .prompt([{
                type: 'list',
                message: 'what type of team member would you like to add?',
                name: 'addEmp',
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "I'm okay my team is complete"]
                }])
            .then(function (choice) {
                switch(choice.addEmp) {
                    case "Manager":
                        newManager();
                        break;
                    case "Engineer":
                        newEngineer();
                        break;
                    case "Intern":
                        newIntern();
                        break;
                    case "I'm okay my team is complete":
                        complete();
                }})
    }
            //newEmp();

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
                const intern = new Intern(response.iName, response.iID, response.iEmail, response.school);
                employeeArr.push(intern);
                newEmp();
            });
    }
     

        function complete(){
            console.log ("Here is your team!")
        
            //fs.writeFile('index.html', htmlskeleton, (err))
           //console.log(layout(employeeArr))
           console.log(employeeArr)

            //const profile = htmlskeleton(employeeArr);
            fs.writeFileSync("index.html", layout(employeeArr), 'utf-8');
        //     fs.writeFile("index.html",layout(employeeArr), (err) =>
        //    err ? console.log(err) : console.log('Success!'));
        };
    newEmp();
}

teamMembers()