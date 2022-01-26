document.addEventListener("DOMContentLoaded", function () {

    fetch('https://yc2112-backend.azurewebsites.net/receptenlijst')
        .then(result => result.json())
        .then(products => {
            console.log(products);
            toevoegenAanTabel(products);
        });
});

function toevoegenAanTabel(dummyData) {
    console.log(dummyData);
    let data = document.getElementById("overzicht");
    for(var x=0; x<dummyData.length; x++) {
        data.innerHTML+=`<div class="row">
            <div class="col-sm-3" style="font-weight: 600;">${dummyData[x].bereidingstijd}</div>
            <div class="col-sm-3" style="font-weight: 600;  text-decoration: underline;" onclick="naarReceptenDetails(${dummyData[x].id})">${dummyData[x].naam}</div>
            <div class="col-sm-6" style="font-weight: 600;">${dummyData[x].beschrijving}</div>
        </div>`;
    }
}

function naarReceptenDetails(receptid){
    window.location = "receptendetails.html?receptid="+receptid;
}