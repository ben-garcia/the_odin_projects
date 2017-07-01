$(document).ready(function() {
  var food;

  // render the grid.
  function renderGrid() {
    $("body").prepend("<div id='grid'></div>");
    for (var i = 0; i < 40; i++) {
      for (var j = 0; j < 40; j++) {
        if (i == 20 && j == 20) {
          $("#grid").append("<div class='box player'></div>");
        } else {
          $("#grid").append("<div class='box'></div>");
        }
      }
    }
  }

  function renderFood() {
    var grid = $("#grid")[0].children;
    var box = Math.floor(Math.random() * 1599);
    grid[box].setAttribute("id", "food");
  }

  function growSnake() {
    console.log("growSnake");
    $(".player").append("<div class='player'></div>")
  }

  // move the snake.
  function move() {
    $(document).keydown(function(event) {
      var x = $(".player").position().left;
      var y = $(".player").position().top;
      switch (event.which) {
        case 37: // left
        console.log(x);
        $(".player").animate({left: "-=18px"}, 0);
        eatFood();
        break

        case 38: // up
        $(".player").animate({top: "-=22.3px"}, 0);
        eatFood();
        break

        case 39: // right
        $(".player").animate({left: "+=18px"}, 0);
        eatFood();
        break;

        case 40: // down
        $(".player").animate({top: "+=22.3px"}, 0);
        eatFood();
        break;

        default: return;
      }
    });
  }

  function eatFood() {
    var food = $("#food");
    if (food.length > 0) {
      var player = $(".player");
      var playerLeft = player.offset().left;
      var playerTop = Math.floor(player.offset().top);
      var foodLeft = food.offset().left;
      var foodTop = Math.floor(food.offset().top);

      // check when player eats food.
      if (playerLeft == foodLeft && (playerTop + 1 == foodTop ||
          playerTop + 2 == foodTop || playerTop == foodTop) ||
          (playerTop == foodTop + 1 || playerTop == foodTop + 2)) {
        $("#food")[0].removeAttribute("id")
        growSnake();
        renderFood();
      }
    }
  }

  /* ---------------------------------------------
                          MAIN
  ------------------------------------------------*/

  renderGrid();
  renderFood();
  move();
  eatFood();

});
