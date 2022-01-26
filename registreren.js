function maakGebruiker() {
    let url  = "https://yc2112-backend.azurewebsites.net/users";
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pword").value;
    let user = {};
    user.naam = name;
    user.email = email;
    user.wachtwoord = pass;

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    })
    .then(result => console.log(result));
}