$("button").on("click", function() {

  var person = $(this).attr("data-animal");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    
    .then(function(response) {
    
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        
        // if statement only pulling the rating out
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");

          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(personImage);

          $("#images").prepend(gifDiv);
        }
      }
    });
});




// $("#images").on("click", ".gif", function(event){
//   event.preventDefault();
  
//   var freeze = $(this).attr("data-animal");
//       if (freeze === "still") {
//   $(this).attr("src", $(this).attr("data-animate"));
//   $(this).attr("data-person", "animate");
//   } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-person", "still");
//   }
// });


