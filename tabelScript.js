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
        data.innerHTML+=`<div class="row">
            <div class="col-sm-3" style="font-weight: 600;">${recepten[x].bereidingstijd}</div>
            <div class="col-sm-3" style="font-weight: 600;">${recepten[x].naam}</div>
            <div class="col-sm-6" style="font-weight: 600;">${recepten[x].beschrijving}</div>
            <div class="col-sm-6" style="font-weight: 600;">${recepten[x].bereiding}</div>
            <div class="col-sm-6" style="font-weight: 600;">${recepten[x].afbeelding}</div>
        </div>`;
    }
}