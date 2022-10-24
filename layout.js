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
            <p> Office:${mOffice}</p>
        </div>
        
        
    </section>
`
    }
}