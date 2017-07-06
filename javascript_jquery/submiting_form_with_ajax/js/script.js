$(document).ready(function() {
  // Total number of pages for the request.
  var totalPages;
  // Number of films returned.
  var totalResults;
  // API URL
  var apiURL;
  // first page results
  var firstPageResults;
  // current page
  var currentPage = 1;

  // there is no need to show the results table before the ajax request is done.
  $(".results").hide();

  // Make sure the request is only sent if the user has enterd a Movie Title.
  // if not, then highlight the field and show error message.
  $("#form").validate({
    rules: {
      movie_title: "required"
    },
    messages: {
      movie_title: {
        required: "* Movie Title is Required"
      }
    },
    // Function that changes the default CSS of the error.
    errorPlacement: function(error, element) {
      error.appendTo(element.parent());
      $(error).css({
        color: "red",
        fontSize: "18px",
        display: "block",
        margin: "3px 0 0 140px",
        fontFamily: "arial"
      });
      $(element).addClass("invalid");
    },
    // Submits the form via AJAX when valid.
    submitHandler: function(form) {
      var movie = $("input[name='movie_title']").val();
      var newMovieString;
      if (movie.includes(" ")) {
        newMovieString = movie.replace(" ", "%20");
      } else {
          newMovieString = movie;
      }

      apiURL = "https://api.themoviedb.org/3/search/movie?api_key=e92d310c3383f1dc1b0af41ea93ae585&include_adult=false&&query=" + newMovieString;

      // Send the AJAX request.
      $(this).ajaxSubmit({
        url: apiURL,
        complete: function(jqXHR, textStatus) {
        },
        dataType: "json",
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("----------error----------");
          console.log("status: " + textStatus);
          console.log("errorThrown: " + errorThrown);
        },
        method: "GET",
        success: function(data, textStatus, jqXHR) {
          showResults(data, textStatus, jqXHR);
        },
        statusCode: {
          404: function() {
            $(".results").empty();
            $(".results").append("<h1>Movie could not be found</h1>");
          }
        }
      });
    }
  });

  function showResults(data, textStatus, jqXHR) {
    // clear the tbody section of the table for future requests.
    $("tbody").empty();
    firstPageResults = data["results"].length;
    totalPages = data["total_pages"];
    totalResults = data["total_results"];
    var $tbody = $("table tbody")[0];

    console.log(($(".results").get(0)));
    $(".results").prepend("<h2 id='totalResults'>Results: " + totalResults + "</h2>");

    $(data["results"]).each(function(index, element) {

      var poster = "https://image.tmdb.org/t/p/w500" + element.poster_path;
      var title = element.title.toUpperCase();
      var releaseDate = element.release_date;
      var language = element.original_language.toUpperCase();

      $("tbody").append("<tr id='" + element.id + "'></tr>");
      $("#" + element.id).append(index + 1);
      $("#" + element.id).append("<td><img src='" + poster + "'></td>");
      $("#" + element.id).append("<td>" + title + "</td>");
      $("#" + element.id).append("<td>" + releaseDate + "</td>");
      $("#" + element.id).append("<td>" + language + "</td>");

    })

    $(".results").show();

    if (totalPages > currentPage) {
      currentPage++;
    }
  }


  $(window).scroll(function() {

    if ($(window).scrollTop() + $(window).height() > $(document).height()) {

      if (totalPages != 0 && totalPages > 1 && currentPage <= totalPages) {

        if (currentPage == totalPages) {
          $(".results").append("<h2>No more results to display</h2>");
        } else {
          $(".results").append("<h1 id='loading'>Loading...</h1>");
        }

        $.get({
          url: apiURL + "&page=" + currentPage,
          method: "GET",
          dataType: "json",
          success: function(data, textStatus, jqXHR) {
            loadNextPage(data, textStatus, jqXHR);
          }
        });
      }
    }
  });

  // could probably use a single 'show results' method.
  // but i just want to make it work.
  function loadNextPage(data, textStatus, jqXHR) {

    var $tbody = $("table tbody")[0];

    $(data["results"]).each(function(index, element) {

      var poster = "https://image.tmdb.org/t/p/w500" + element.poster_path;
      var title = element.title.toUpperCase();
      var releaseDate = element.release_date;
      var language = element.original_language.toUpperCase();

      $("tbody").append("<tr id='" + element.id + "'></tr>");
      $("#" + element.id).append(firstPageResults + 1);
      $("#" + element.id).append("<td><img src='" + poster + "'></td>");
      $("#" + element.id).append("<td>" + title + "</td>");
      $("#" + element.id).append("<td>" + releaseDate + "</td>");
      $("#" + element.id).append("<td>" + language + "</td>");
      firstPageResults++;
    })
    currentPage++;

  }

});
