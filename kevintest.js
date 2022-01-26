document.addEventListener("DOMContentLoaded", function () {

    fetch('https://yc2112-backend.azurewebsites.net/receptenlijst')
        .then(result => result.json())
        .then(recepten => {
            toevoegenAanTabel(recepten);
        });
});

function toevoegenAanTabel(recepten) {
    let data = document.getElementById("overzicht");
    for(var x=0; x<recepten.length; x++) {
        data.innerHTML+=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="afb/${recepten[x].afbeelding}" alt="${recepten[x].naam}">
        <div class="card-body">
          <h5 class="card-title">${recepten[x].naam}</h5>
          <p class="card-text">${recepten[x].beschrijving}</p>
          <a href="receptendetails.html?receptid=${recepten[x].id}" class="btn btn-primary">Check recept</a>
          <button type="button" onclick="naarReceptenDetails(${recepten[x].id})>Check recept</button>
        </div>
      </div>`;
    }
}

function naarReceptenDetails(receptid){
    window.location = "receptendetails.html?receptid="+receptid;
}