const output = [];
const teamCards = (cards) => {

    const mCard = manager => {
        return `<section class="card manager-card">
                    <div class="card-top bg-success text-light">
                        <h5 class="card-title">${manager.getName()}</h5>
                        <h6 class="card-title">&#x1f50e ${manager.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item"> Office Number:${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                 </section>
                 `;
                 };

    const eCard = engineer => {
        return  `<section class="card engineer-card">
                    <div class="card-top bg-primary text-light">
                        <h5 class="card-title">${engineer.getName()}</h5>
                        <h6 class="card-title">&#x1F5A5 ${engineer.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</li>
                        </ul>
                    </div>
                </section>
                `;
                 };

    const iCard = intern => {
        return `<section class="card intern-card">
                    <div class="card-top bg-warning text-dark">
                        <h5 class="card-title">${intern.getName()}</h5>
                        <h6 class="card-title">&#x1F476 ${intern.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
            </section>
            `;
            };

output.push(cards.filter(employee => employee.getRole() === "Manager").map(manager => mCard(manager)));

output.push(cards.filter(employee => employee.getRole() === "Engineer").map(engineer => eCard(engineer)).join(""));

output.push(cards.filter(employee => employee.getRole() === "Intern").map(intern => iCard(intern)).join(""));
console.log(output);
return output.join("");
}

module.exports = cards => {

return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="jumbotron jumbotron-fluid text-center bg-danger">
        <div class="container">
            <h1 class="display-6 text-white">Team Profile</h1>
        </div>
    </header>

    <div class="container justify-content-center">
        <div class="row">
            <div class="team-area col-10 d-flex justify-content-around">
                ${teamCards(cards)}
            </div>
        </div>
</body>
</html>`;

};

