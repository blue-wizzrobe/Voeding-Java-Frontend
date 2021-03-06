function gaNaarAnderePagina(dePagina){
    window.location=dePagina;
}
document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const userid = new URLSearchParams(queryString).get('receptid');
  console.log(userid);
  fetch('http://yc2112-backend.azurewebsites.net/getReceptById/'+userid)
        .then(result => result.json())
        .then(productDetails => {
            console.log(productDetails);
            document.getElementById("recepttitel").innerHTML = productDetails.naam;
            document.getElementById("receptbeschrijving").innerHTML = productDetails.beschrijving;
            document.getElementById("receptbereidingstijd").innerHTML = productDetails.bereidingstijd + " minuten";
            document.getElementById("receptbereiding").innerHTML = productDetails.bereiding;
            document.getElementById("receptafbeelding").src = "afb/"+productDetails.afbeelding;
        });
});


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
   
    