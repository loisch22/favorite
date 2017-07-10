$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var cuisine1 = $("#cuisine1").val();
    var cuisine2 = $("#cuisine2").val();
    var cuisine3 = $("#cuisine3").val();
    var cuisine4 = $("#cuisine4").val();
    var cuisine5 = $("#cuisine5").val();
    var allCuisine = [cuisine1, cuisine2, cuisine3, cuisine4, cuisine5];
    var threeCuisine = allCuisine[1] + " " + allCuisine[0] + " " + allCuisine[2];

    $("ul.allCuisine").append("<li>" +  cuisine1 + "</li>");
    $("ul.allCuisine").append("<li>" +  cuisine2 + "</li>");
    $("ul.allCuisine").append("<li>" +  cuisine3 + "</li>");
    $("ul.allCuisine").append("<li>" +  cuisine4 + "</li>");
    $("ul.allCuisine").append("<li>" +  cuisine5 + "</li>");
    console.log(allCuisine);
    $(".threeCuisine").append(threeCuisine);


  });
});
