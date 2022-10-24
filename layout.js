const teamCards = cards => {

    const mCard = manager => {
        return 
     `<section class="card manager-card">
        <div class="card-top bg-primary text-light">
        <h5>${mName}</h5>
        <h6>&#x1f50e Manager</h6>
        </div>
        <div class="card-body">
            <p>ID:${mID}</p>
            <br>
            <p>Email: <a href = "mailto:${mEmail}">${mEmail}</a></p>
            <br>
            <p> Office Number:${mOffice}</p>
        </div>
    </section>
`
    }

    const eCard = engineer => {
        return 
     `<section class="card engineer-card">
        <div class="card-top bg-primary text-light">
        <h5>${eName}</h5>
        <h6>&#xe00c Engineer</h6>
        </div>
        <div class="card-body">
            <p>ID:${eID}</p>
            <br>
            <p>Email: <a href = "mailto:${eEmail}">${eEmail}</a></p>
            <br>
            <p>Github: <a href="https://github.com/${github}">${github}</p>
        </div>
    </section>
`
    }

    const iCard = intern => {
        return 
     `<section class="card engineer-card">
        <div class="card-top bg-primary text-light">
        <h5>${iName}</h5>
        <h6>&#xe51a Intern</h6>
        </div>
        <div class="card-body">
            <p>ID:${iID}</p>
            <br>
            <p>Email: <a href = "mailto:${iEmail}">${iEmail}</a></p>
            <br>
            <p>School: ${school}</p>
        </div>
    </section>
`
    }
}