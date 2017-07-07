var map;
var markers = [];
/*
  Name: Subtle Grayscale
  By: Paulo Avila
  URL: https://snazzymaps.com/style/15/subtle-grayscale
*/
var styles = [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 65
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": "50"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
          {
              "lightness": "30"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "lightness": "40"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#ffff00"
          },
          {
              "lightness": -25
          },
          {
              "saturation": -97
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "lightness": -25
          },
          {
              "saturation": -100
          }
      ]
  }
];

// Loads the map at the default location in Colorado, USA.
// Zoomed out until the North America is centered.
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.550051, lng: -105.782067},
    zoom: 4,
    styles: styles
  });

}

$(document).ready(function() {

  $("#form").validate({
    rules: {
      latitude: {
        required: true,
        min: -90,
        max: 90
      },
      longitude: {
        required: true,
        min: -180,
        max: 180
      },
      message: {
        required: true
      }
    },
    messages: {
      latitude: {
        required: "* Latitude field is required",
        min: "* Latitude field min value is -90",
        max: "* Latitude field max value is 90"
      },
      longitude: {
        required: "* Longitude field is required",
        min: "* Longitude field min value is -180",
        max: "* Longitude field max value is 180"
      },
      message: {
        required: "* Please Enter a message"
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
        fontFamily: "monospace"
      });
      $(element).addClass("invalid");
    },
    submitHandler: function(form) {
      var lat = $(form).find('input#lat').get(0)['value'];
      var lng = $(form).find('input#long').get(0)['value'];
      var msg = $(form).find('textarea#message').get(0)['value'];
1
      setMarker(parseFloat(lat), parseFloat(lng), msg);
    }

  });

  function setMarker(latitude, longitude, message) {
    var position = {lat: latitude, lng: longitude};
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: '#' + (markers.length + 1)  + ' Marker!',
      animation: google.maps.Animation.DROP
    });
    markers.push(marker);

    // Create the info window using the message the user submitted.
    var infoWindow = new google.maps.InfoWindow({
      content: message
    });

    // When the user click on a merker the infowindow pops up with the message associated with it.
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }

  document.getElementById('show-markers').addEventListener('click', showMarkers);
  document.getElementById('hide-markers').addEventListener('click', hideMarkers);

  // This function will loop through the markers array and display them all.
  function showMarkers() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker.
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }

  // This function will loop through the markers array and hide them all.
  function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
      // Setting the map to null doesn't delete the markers but rather just hides them.
      markers[i].setMap(null);
    }
  }

});
