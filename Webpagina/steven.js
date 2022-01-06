function receptenAantonen(){
    console.log('checkit');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(this.responseText);
        if(this.readyState == 4){
            var lijstje = document.getElementById("lijst");
            antwoordObject = JSON.parse(this.responseText);
            lijstje.innerHTML =  "";
            for(var x = 0; x < antwoordObject.length; x++){
                lijstje.innerHTML+= "Hoi" + antwoordObject[x].naam ;
            }
        }
    }
    xhr.open("get", "http://localhost:8082/receptenlijst", true);
    xhr.send();
}

function nieuweReceptAanmaken(){
    console.log('Nieuw');

    var xhr = new XMLHttpRequest();
    var getypt = document.getElementById('input');
            console.log("Je hebt " + getypt.value + " getypt");

            xhr.onreadystatechange = function (){ 
                
            }
            xhr.open("GET", "http://localhost:8082/recept/"+getypt.value , true);
            xhr.send();


}