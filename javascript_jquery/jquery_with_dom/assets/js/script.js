$(document).ready(function() {
  var happyBurger = '<h1>Happy Burger</h1>';
  var burgerImage = "<img src='assets/pictures/guy-fieri-restaurant.jpg'>";
  var restaurantDesc = "<p>Happy Burder was founded by the Happy Family in 1997, which eventually branched out to more than 300 franchised restaurants all over the US. Happy Burger well-known for its DeathBurger, which has made the restaurant famous. </p>";
  var containerDiv = "<div id='container'></div>";
  var homeButton = "<button type='button' id='home' class='home'>Home</button>";
  var aboutButton = "<button type='button' id='about'>About</button>";
  var menuButton = "<button type='button' id='menu'>Menu</button>";

  $('#content').append(homeButton, aboutButton, menuButton, containerDiv);
  $('#container').append(happyBurger, burgerImage, restaurantDesc);
  $('#about').click(function() {
    $('#home').removeClass('home');
    $('#menu').removeClass('menu');
    $('#container').remove();
    $(this).addClass('about');
    renderAbout();
  });

  $('#menu').click(function(){
    $('#home').removeClass('home');
    $('#about').removeClass('about');
    $('#container').remove();
    $(this).addClass('menu');
    renderMenu();
  });

  $('#home').click(function(){
    $('#menu').removeClass('menu');
    $('#about').removeClass('about');
    $('#container').remove();
    $(this).addClass('home');
    renderHome();
  });

});

var renderAbout = function() {
  var containerDiv = "<div id='container'></div>";
  var heading = "<h1>About</h1>";
  var description = "<p>Founded in 1997, Happy Burger and been offering quality food at an affordable price for 20 years. The vision of John and Jason Doe, Happy Burger offers excellent customer experience with an electrifying atmosphere. Our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 20 successful years.</p>";
  $('#content').append(containerDiv);
  $('#content').css("height", "300px");
  $('#container').append(heading, description);
}

var renderMenu = function() {
  var containerDiv = "<div id='container'></div>";
  var heading = "<h1>Menu</h1>";
  var smallBurger = "<h5>Small ($1.00)</h5>";
  var smallBurgerPicture = "<img src='assets/pictures/small.jpg'>";
  var mediumBurger = "<h4>Medium ($3.50)</h4>";
  var mediumBurgerPicture = "<img src='assets/pictures/medium.jpg'>";
  var deathBurger = "<h2>Death ($12.99)</h2>";
  var deathBurgerPicture = "<img src='assets/pictures/death.jpg'>";
  $('#content').append(containerDiv);
  $('#content').css("height", "1500px");
  $('#container').append(heading, smallBurger, mediumBurger, deathBurger);
  $('h5').append(smallBurgerPicture).css("width", "300px");
  $('h4').append(mediumBurgerPicture).css("width", "400px");
  $('h2').append(deathBurgerPicture).css("width", "600px");
}

var renderHome = function() {
  var happyBurger = '<h1>Happy Burger</h1>';
  var burgerImage = "<img src='assets/pictures/guy-fieri-restaurant.jpg'>";
  var restaurantDesc = "<p>Happy Burder was founded by the Happy Family in 1997, which eventually branched out to more than 300 franchised restaurants all over the US. Happy Burger well-known for its DeathBurger, which has made the restaurant famous. </p>";
  var containerDiv = "<div id='container'></div>";
  $('#content').append(containerDiv);
  $('#content').css("height", "550px");
  $('#container').append(happyBurger, burgerImage, restaurantDesc);
}
