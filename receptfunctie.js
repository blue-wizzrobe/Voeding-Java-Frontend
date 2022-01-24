function gaNaarAnderePagina(dePagina){
    window.location=dePagina;
}

function toonAlleRecepten(deRecepten){
    console.log("HetWerkt");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        // console.log(this.responseText);
        if(this.readyState == 4){
            var lijstje = document.getElementById("lijst");
            antwoordObject = JSON.parse(this.responseText);
            toevoegenAanTabel(antwoordObject);
            for(var x = 0; x < antwoordObject.length; x++){
                lijstje.innerHTML+= "Hoi" + antwoordObject[x].naam ;
            }
        }
    }
    xhr.open("get", "http://localhost:8082/productlijst", true);
    xhr.send();
}


    function includeHTML() {
      var z, i, elmnt, file, xhttp;
      /* Loop through a collection of all HTML elements: */
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              /* Remove the attribute, and call this function once more: */
              elmnt.removeAttribute("w3-include-html");
              includeHTML();
            }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
        }
      }
    }
   
    