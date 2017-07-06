The Odin Project <br />
Project: Infinte Scroll and Submitting a Form using AJAX <br /><br />

This project uses <a href="https://www.themoviedb.org/?language=en">The Movie Database</a> <br />
The user enters a movie title. After the user hits the "search" button the $.ajax method is used to sent a request to the API for the movie title.<br>
The API sends back a json string containing the movie with the title. <br>
20 movies are displayed to the user. When the bottom of the page is reached then that triggers a jQuery scroll event which calls the $.get method to retrieve anther batch of movies until there are no more movies to display.
