$(document).ready(function() {

  $("#next").click(next);
  $("#prev").click(prev);

  // runs the next method every 5 seconds.
  setInterval(next, 5000);

  $("#first").click(changeNavButton);

  // remove 'active' class and add 'inactive' class for the current image.
  // set the previos image to 'active' leaving all other images as 'inactive'.
  function prev() {
    console.log("prev clicked");
    var $image = $(".active");
    var $next = $("#slides").find("li img");

    for (var i = $next.length - 1; i >= 0; i--) {
      if ($image[0].id == $next[i].id) {
        $next[i].classList.remove("active");
        $next[i].classList.add("inactive");
        if (i == 0) {
          $next[$next.length - 1].classList.remove("inactive");
          $next[$next.length - 1].classList.add("active");
        } else {
          $next[i - 1].classList.remove("inactive");
          $next[i - 1].classList.add("active");
        }
      }
    }
  }

  // Similar to the 'prev' method but for the next image in the list.
  function next() {
    var $image = $(".active");
    var $next = $("#slides").find("li img");

    for (var i = 0; i < $next.length; i++) {
      if ($image[0].id == $next[i].id) {
        $next[i].classList.remove("active");
        $next[i].classList.add("inactive");
        if (i == $next.length - 1) {
          $next[0].classList.remove("inactive");
          $next[0].classList.add("active");
        } else {
          $next[i + 1].classList.remove("inactive");
          $next[i + 1].classList.add("active");
        }
      }
    }
  }

  function changeNavButton() {
    console.log("clicked nav button");
  }

});
