$(document).ready(function() {

  var currentPlayer = "X";
  printBoard();
  $("#box1").click(move);
  $("#box2").click(move);
  $("#box3").click(move);
  $("#box4").click(move);
  $("#box5").click(move);
  $("#box6").click(move);
  $("#box7").click(move);
  $("#box8").click(move);
  $("#box9").click(move);

  function printBoard() {
    for (var i = 0; i < 9; i++) {
      $(".container").append("<div class='box' id='box" + (i+1) + "'></div>");
    }
  }

  function switchPlayers() {
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }

  function checkForVictory(image) {
    if (currentPlayer == "X") {
      if ($("#box1").css("background-image") == "http://nobodyintheworld.com/CX/c.png" &&
          $("#box1").css("background-image") == $("#box2").css("background-image") &&
          $("#box2").css("background-image") == $("#box3").css("background-image") &&
          $("#box1").css("background-image") == $("#box3").css("background-image"))  {
            alert("Player X is Victorious");
      } else if (($("#box1").css("background-image") == "http://nobodyintheworld.com/CX/c.png" &&
          $("#box1").css("background-image") == $("#box4").css("background-image") &&
          $("#box4").css("background-image") == $("#box7").css("background-image") &&
          $("#box1").css("background-image") == $("#box7").css("background-image")))  {
            alert("Player X is Victorious");
      } else if (($("#box1").css("background-image") == "http://nobodyintheworld.com/CX/c.png" &&
          $("#box1").css("background-image") == $("#box5").css("background-image") &&
          $("#box5").css("background-image") == $("#box9").css("background-image") &&
          $("#box1").css("background-image") == $("#box9").css("background-image"))) {
            alert("Player X is Victorious");
      }
    } else {

    }
  }

  function move() {
    if($(this).css("background-image") != "none") {
      alert("Box already has a marker");
      return;
    }

    if (currentPlayer == "X") {
      image = "http://nobodyintheworld.com/CX/c.png";
    } else {
      image = "http://nobodyintheworld.com/PX/c.png"
    }
    console.log($(this.id));

    switch (this.id) {
      case "box1":
        $("#box1").css("background-image", "url(" + image + ")");
        break;
      case "box2":
        $("#box2").css("background-image", "url(" + image + ")");
        break;
      case "box3":
        $("#box3").css("background-image", "url(" + image + ")");
        break;
      case "box4":
        $("#box4").css("background-image", "url(" + image + ")");
      case "box5":
        $("#box5").css("background-image", "url(" + image + ")");
        break;
      case "box6":
        $("#box6").css("background-image", "url(" + image + ")");
        break;
      case "box7":
        $("#box7").css("background-image", "url(" + image + ")");
        break;
      case "box8":
        $("#box8").css("background-image", "url(" + image + ")");
        break;
      case "box9":
        $("#box9").css("background-image", "url(" + image + ")");
        break;
      default:
        return;
    }
    checkForVictory();
    switchPlayers();
  }

});
