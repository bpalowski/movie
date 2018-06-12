function ticket(movie, time , children, adult, total){
  this.movie = movie;
  this.time = time;
  this.children= children;
  this.adult = adult;
  //this.total = total;
  //this.stateName = state;
}
ticket.prototype.total = function(){
  return childPrice*inputChild+adultPrice*inputAdult;
}


$(document).ready(function() {
  $("form#new-movie").submit(function(event) {
    event.preventDefault();

    ticket.prototype.total = function(){
      return childPrice*inputChild+adultPrice*inputAdult;
    }

    var selectedMovie = $("select#new-movie").val();
    var selectTime = $("select#new-time").val();
    var inputChild = parseInt($("input#new-child").val());
    var inputAdult = parseInt($("input#new-adult").val());
    var total ;
    //var inputState = $("input#new-state-name").val();

    var newTicket = new ticket(selectedMovie, selectTime, inputChild, inputAdult, total);
    if (selectTime === "Matanee") {
      var childPrice = 5;
      var adultPrice = 10;

      //childPrice*inputChild+adultPrice*inputAdult;
    } else if (selectTime ==="Afternoon") {
      var childPrice = 7;
      var adultPrice = 12;
      //total = childPrice*inputChild+adultPrice*inputAdult;
      }
     console.log(total);

    $("ul#contacts").append(
      "<li><span class='movieInfo'>" + newTicket.movie + "</span></li>");
      debugger;
    $(".movieInfo").last().click(function(){
      $("#show-info").show();
      $("#show-info h2").text(newTicket.movie);
      $(".movie-name").text(newTicket.movie);
      $(".Time-name").text(newTicket.time);
      $(".child-input").text(newTicket.children);
      $(".adult-input").text(newTicket.adult);
      $(".total").text(newTicket.total);
      alert(newTicket.total);
     //$(".city-name").text(newTicket.cityName);
    //  $(".state-name").text(newTicket.stateName);
    });



    $("select#new-movie").val("");
    $("select#new-time").val("");
    $("input#new-child").val("");
    //$("input#new-city-name").val("");
    $("input#new-adult").val("");
    $(".total").val("");
  });
  });


//Create a constructor for object Contact
//function Contact(first, last , street, city, state){
//  this.firstName = first;
//  this.lastName = last;
  //this.streetName= street;
  //this.cityName = city;
  //this.stateName = state;
//}

//function clearInput()
{
//  $("input#new-first-name").val("");
  //$("input#new-last-name").val("");
  //$("input#new-street-name").val("");
//  $("input#new-city-name").val("");
//  $("input#new-state-name").val("");
}
