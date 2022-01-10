function voegReceptToeAanUser() {
    
    var receptNaam = document.getElementById('receptNaam').value;
    var bereidingstijd = document.getElementById('bereidingstijd').value;
    var userId = 3;
    var receptObject = {};

    receptObject.naam = receptNaam;
    receptObject.bereidingstijd = bereidingstijd;
    var receptObjectJSON = JSON.stringify(receptObject);

    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        console.log(this.responseText);
    }
    xhr.open("POST", `http://localhost:8082/receptaanuser/${userId}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(receptObjectJSON);
}