document.addEventListener("DOMContentLoaded", function () {

    fetch('https://yc2112-backend.azurewebsites.net/receptenlijst')
        .then(result => result.json())
        .then(products => {
            console.log(products);
            //appendToTable(products, "table1");
            toevoegenAanTabel(products);
        })
        .then(recepten => {
            toevoegenAanTabel(recepten);
        })
});

function toevoegenAanTabel(recepten) {
    let data = document.getElementById("overzicht");
    for(var x=0; x<recepten.length; x++) {
        data.innerHTML+=`<div class="row">
            <div class="col-sm-2" style="font-weight: 600;">${recepten[x].bereidingstijd} minuten</div>
            <div class="col-sm-2" style="font-weight: 600;  text-decoration: underline;" onclick="naarReceptenDetails(${recepten[x].id})">${recepten[x].naam}</div>
            <div class="col-sm-2" style="font-weight: 600;">${recepten[x].beschrijving}</div>
            <div class="col-sm-2" style="font-weight: 600;"><img src="afb/${recepten[x].afbeelding}" /></div>
        </div>`;
    }
}

function naarReceptenDetails(receptid){
    window.location = "receptendetails.html?receptid="+receptid;
}
