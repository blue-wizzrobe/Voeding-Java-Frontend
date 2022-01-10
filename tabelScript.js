document.addEventListener("DOMContentLoaded", function () {

    fetch('http://localhost:8082/productlijst')
        .then(result => result.json())
        .then(products => {
            console.log(products);
            appendToTable(products, "table1");
        });

    function appendToTable(object, tableName) {
        let table = document.getElementById(tableName);

        for (let i = 0; i < object.length; i++) {
            let newRow = document.createElement("tr");
            table.appendChild(newRow);

            let nameCell = document.createElement("td");
            let name = document.createTextNode(object[i].id);
            nameCell.appendChild(name);
            table.appendChild(nameCell);

            let descriptionCell = document.createElement("td");
            let description = document.createTextNode(object[i].naam);
            descriptionCell.appendChild(description);
            table.appendChild(descriptionCell);
        }
    }

    document.getElementById("add_product").addEventListener('click', function () {
        var xhr = new XMLHttpRequest();
        var input = document.getElementById('product_name').value.trim();
        // xhr.onreadystatechange = function () {
        //     //console.log("terug van de server");
        // }
        xhr.open("GET", `http://localhost:8082/product/${input}`, true);
        xhr.send();
        location.reload();
    });
});