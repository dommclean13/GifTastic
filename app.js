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

$("#images").on("click", ".gif", function(event){
  event.preventDefault();
  
  var freeze = $(this).attr("data-animal");
      if (freeze === "still") {
  $(this).attr("src", $(this).attr("data-animate"));
  $(this).attr("data-state", "animate");
  } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
  }
});



// $("#images").on("click, ".gif", function(){
//   event.preventDefault();


//   var state = $(this).attr("data-state");

//     if()

// }







    // my code below
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })

//     .then(function(response) {

//       // Storing an array of results in the results variable

//       var results = response.data;
      

//       // ------------------ //

      
//           // Only taking action if the photo has an appropriate rating
//           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

//             // Creating a div for the gif
//             var gifDiv = $("<div>");

//             // Storing the result item's rating
//             var rating = results[i].rating;

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + rating);

//             // Creating an image tag
//             var personImage = $("<img>");

//             // Giving the image tag an src attribute of a proprty pulled off the
//             // result item
//             personImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and personImage we created to the "gifDiv" div we created
//             gifDiv.append(p);
//             gifDiv.append(personImage);

//             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#images").prepend(gifDiv);
//           }
//         }
//       });
// });