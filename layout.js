const teamCards = cards => {

    const mCard = manager => {
        return 
     `<section class="card manager-card">
        <div class="card-top bg-primary text-light">
        <h5>${manager.getName()}</h5>
        <h6>&#x1f50e Manager</h6>
        </div>
        <div class="card-body">
            <p>ID:${manager.getID()}</p>
            <br>
            <p>Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <br>
            <p> Office Number:${manager.getOffice()}</p>
        </div>
    </section>
`;
    };

    const eCard = engineer => {
        return 
     `<section class="card engineer-card">
        <div class="card-top bg-primary text-light">
        <h5>${engineer.getName()}</h5>
        <h6>&#xe00c Engineer</h6>
        </div>
        <div class="card-body">
            <p>ID:${engineer.getID()}</p>
            <br>
            <p>Email: <a href = "mailto:${engineer.getEmail()}">${engineet.getEmail()}</a></p>
            <br>
            <p>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</p>
        </div>
    </section>
`;
    };

    const iCard = intern => {
        return 
     `<section class="card engineer-card">
        <div class="card-top bg-primary text-light">
        <h5>${intern.getName()}</h5>
        <h6>&#xe51a Intern</h6>
        </div>
        <div class="card-body">
            <p>ID:${intern.getID()}</p>
            <br>
            <p>Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <br>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </section>
`;
    };
}