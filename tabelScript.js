document.addEventListener("DOMContentLoaded", function () {

    fetch('https://yc2112-backend.azurewebsites.net/receptenlijst')
        .then(result => result.json())
        .then(products => {
            console.log(products);
            appendToTable(products, "table1");
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