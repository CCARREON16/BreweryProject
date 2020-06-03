 var queryURL = "https://api.openbrewerydb.org/breweries?by_city=san_diego"
var brewSearch;

$(document).ready(function() {
  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
  //when clicked  run brewery search 
  $("#brew-search-button").on("click", function() {
   ///get search value for brewery
   brewSearch = $("#B-search").val();
   var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + brewSearch 
   //var city = brewSearch.city[0];

   console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET" 
      }).then(function(response) {
          console.log(response);
          var breweryType = response[0].brewery_type  

          outputNameStreet =""
                  
          obj = JSON.parse(JSON.stringify(response));
        
         
          for (i = 0; i < obj.length; i++) {
           
            outputNameStreet += obj[i].name + " : " + obj[i].street + "<br>";
          
          }





        document.getElementById("search-results").innerHTML = outputNameStreet;

        
// Get the modal

        

    });
  });
});

