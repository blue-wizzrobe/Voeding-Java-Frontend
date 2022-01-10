function gaNaarAnderePagina(dePagina){
    window.location=dePagina;
}

function toonAlleRecepten(deRecepten){
    console.log("HetWerkt");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(this.responseText);
        if(this.readyState == 4){
            var lijstje = document.getElementById("lijst");
            antwoordObject = JSON.parse(this.responseText);
            for(var x = 0; x < antwoordObject.length; x++){
                lijstje.innerHTML+= "Hoi" + antwoordObject[x].naam ;
            }
        }
    }
    xhr.open("get", "http://localhost:8082/productlijst", true);
    xhr.send();
}
