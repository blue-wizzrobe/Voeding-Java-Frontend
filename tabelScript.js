document.addEventListener("DOMContentLoaded", function () {

    fetch('https://yc2112-backend.azurewebsites.net/receptenlijst')
        .then(result => result.json())
        .then(products => {
            console.log(products);
            appendToTable(products, "table1");
            toevoegenAanTabel(products);
        });

    
  
    
    // document.getElementById("add_product").addEventListener('click', function () {
    //     var xhr = new XMLHttpRequest();
    //     var input = document.getElementById('product_name').value.trim();
    //     // xhr.onreadystatechange = function () {
    //     //     //console.log("terug van de server");
    //     // }
    //     xhr.open("GET", `http://localhost:8082/product/${input}`, true);
    //     xhr.send();
    //     location.reload();
    // });
});

function appendToTable(object, tableName) {

    console.log(object);
    let table = document.getElementById(tableName);

    for (let i = 0; i < object.length; i++) {
        let newRow = document.createElement("tr");
        table.appendChild(newRow);

        let bereidingsCell = document.createElement("td");
        let bereiding = document.createTextNode(object[i].bereidingstijd);
        bereidingsCell.appendChild(bereiding);
        table.appendChild(bereidingsCell);

        let nameCell = document.createElement("td");
        let name = document.createTextNode(object[i].naam);
        nameCell.appendChild(name);
        table.appendChild(nameCell);

        let descriptionCell = document.createElement("td");
        let description = document.createTextNode(object[i].beschrijving);
        descriptionCell.appendChild(description);
        table.appendChild(descriptionCell);
    }
}
function toevoegenAanTabel(dummyData) {
    console.log(dummyData);
    let data = document.getElementById("overzicht");
    for(var x=0; x<dummyData.length; x++) {
        data.innerHTML+=`<div class="row">
            <div class="col-sm-3" style="font-weight: 600;">${dummyData[x].bereidingstijd}</div>
            <div class="col-sm-3" style="font-weight: 600;">${dummyData[x].naam}</div>
            <div class="col-sm-6" style="font-weight: 600;">${dummyData[x].beschrijving}</div>
        </div>`;
    }
}