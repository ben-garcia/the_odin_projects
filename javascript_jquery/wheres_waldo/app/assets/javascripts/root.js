var userClickedPosX, userClickedPosY;
var buttonChoices = ['Waldo', 'Wilma', 'Wizard'];

$(document).ready(function() {

  $('button').each(function(index, element) {
    // 'this' refers to the element.
    $(this).click(function() {
      if ($(this).text() == 'Play') {
        var src = $($($(this).parentsUntil('picture-buttons').get(1)).find('img')[0]).attr('src');
        if ($(this).attr('id') == 'The Town') {
          var puzzleID = $(this).attr('id');
          loadPuzzle(src);
          userInput(puzzleID);
        } else if ($(this).attr('id') == 'FVN and Games in Ancient Rome') {
          var puzzleID = $(this).attr('id');
          loadPuzzle(src);
          userInput(puzzleID);
        } else if ($(this).attr('id') == 'The Gobbling Gluttons') {
          var puzzleID = $(this).attr('id');
          loadPuzzle(src);
          userInput(puzzleID);
        }
      } else {
        if ($(this).attr('id') == 'The Town') {
          console.log('view SCORES for the town');
        } else if ($(this).attr('id') == 'FVN and Games in Ancient Rome') {
          console.log('view SCORES for rvn and games in acient rome');
        } else if ($(this).attr('id') == 'The Gobbling Gluttons') {
          console.log('view SCORES for the gobbling glutons');
        }
      }
    });
  });

  function loadPuzzle(puzzleUrl) {
    var image = '<img id=\'puzzle-picture\' src=' + puzzleUrl + '>';
    var div = '<div id=\'puzzle-page\'></div>';
    var puzzleStats = '<div id=\'puzzle-content\'></div>';

    $('body').empty();
    $('body').append(div);
    $('div#puzzle-page').append('<div id=\'image-container\'></div>');
    //$('div#puzzle-page').append(image);
    $('div#image-container').append(image);
    $('body').css({
      margin: '0',
      padding: '0'
    });
    $('img').css({
      borderRadius: '10px',
      border: '2px solid red',
      width: '1300px',
      height: '750px',
      margin: '10px',
      display: 'inline-block'
    });
    $('div#puzzle-page').append(puzzleStats);
    $('div#puzzle-content').append('<h1>Find</h1>');
  }

  function userInput(puzzleID) {
    $('#puzzle-picture').click(function(event) {
      // check if the element with id 'user-prompt' exists.
      // if it does then remove it.
      if ($('#user-prompt').length) {
        $('#user-prompt').remove();
      }
      // if the element doesn't exists
      // then place it on the DOM.
      else {
        var highlighted = '<div id=\'user-prompt\'><div id=\'highlighted\'></div></div>';
        // Remove any previous highlighted divs.
        $('div#user-prompt').remove();

        $('div#image-container').append(highlighted);
        $('div#user-prompt').append('<div id=\'character-options\'></div>');
        $('div#character-options').append('<p><strong>Who Did You Find?</strong></p>');

        if (buttonChoices.length > 0) {
          $.each(buttonChoices, function(index, element) {
            if (element == 'Waldo') {
              $('div#character-options').append('<button id=\'waldo\'>Waldo</button>');
            }
            else if (element == 'Wilma') {
              $('div#character-options').append('<button id=\'wilma\'>Wilma</button>');
            }
            else if (element == 'Wizard') {
              $('div#character-options').append('<button id=\'wizard\'>Wizard</button>');
            }
          })
        }
        else {
          // TODO what happens when the user has found all the characters.
          $('body').empty();
          $('body').append('<h1>YOU ARE VICTORIOUS</h1>');
        }

        $('div#character-options').fadeIn('slow', 5000);
        $('div#user-prompt').css({
          left: event.pageX - 20,
          top: event.pageY - 25
        });
        userClickedPosX = event.pageX;
        userClickedPosY = event.pageY;
        console.log('X: ' + userClickedPosX + ' ' + 'Y: ' + userClickedPosY);
        fetchCharacters(puzzleID);
      }
    });
  }

  // Making an AJAX request to the Rails backend to get the
  // Characters in the database.
  function fetchCharacters(puzzleID) {
    $.ajax({
      url: '/characters.json',
      dataType: 'json',
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Status: ' + textStatus);
        console.log('Error Thrown: ' + errorThrown);
      },
      method: 'GET',
      success: function(data, textStatus, jqXHR) {
        var characters;

        $.each(data, function(index, element) {

          if (puzzleID == 'The Town' && index == 0) {
            characters = [{
                name: data[0].name,
                posX: data[0].x_position,
                posY: data[0].y_position
              },
              {
                name: data[1].name,
                posX: data[1].x_position,
                posY: data[1].y_position
              },
              {
                name: data[2].name,
                posX: data[2].x_position,
                posY: data[2].y_position
              }
            ]
            verifyUserChoice(characters);
          }
          else if (puzzleID == 'FVN and Games in Ancient Rome' && index == 3) {
            characters = [{
                name: data[3].name,
                posX: data[3].x_position,
                posY: data[3].y_position
              },
              {
                name: data[4].name,
                posX: data[4].x_position,
                posY: data[4].y_position
              },
              {
                name: data[5].name,
                posX: data[5].x_position,
                posY: data[5].y_position
              }
            ]
            verifyUserChoice(characters);
          }
          else if (puzzleID == 'The Gobbling Gluttons' && index == 6) {
            characters = [{
                name: data[6].name,
                posX: data[6].x_position,
                posY: data[6].y_position
              },
              {
                name: data[7].name,
                posX: data[7].x_position,
                posY: data[7].y_position
              },
              {
                name: data[8].name,
                posX: data[8].x_position,
                posY: data[8].y_position
              }
            ]
            verifyUserChoice(characters);
          }
        });
      }
    })
  }

  function verifyUserChoice(characters) {
    var name, posX, posY;

    $('#waldo').click(function(event) {
      name = characters[0].name;
      posX = characters[0].posX;
      posY = characters[0].posY;

      console.log('clicked Waldo');
      console.log('Highlighted Box ----------> X: ' + userClickedPosX  + ' Y: ' + userClickedPosY);
      console.log('name: ' + name + ' x: ' + posX + ' y: ' + posY);

      if ((userClickedPosX + 25) > posX && (userClickedPosX - 25) < posX && (userClickedPosY + 25) > posY && (userClickedPosY - 25) < posY) {
        $('#image-container').prepend('<h1 id=\'correct\'>Correct</h1>');
        setTimeout(function() {
          $('#correct').remove();
        }, 3000);
        $('#waldo').remove();
        // remove the 'Waldo' element for the buttonChoices array.
        // find the index to 'Waldo' to remove it.
        var i = buttonChoices.indexOf('Waldo');
        buttonChoices.splice(i, 1);
        $('div#image-container').append('<div id=\'permanent-box-waldo\'></div>');
        $('#permanent-box-waldo').css({
          left: userClickedPosX - 20,
          top: userClickedPosY - 25
        });
      }
      else {
        $('#image-container').prepend('<h1 id=\'try-again\'>Try Again</h1>');
        setTimeout(function() {
          $('#try-again').remove();
        }, 3000);
      }

    });

    $('#wilma').click(function(event) {
      name = characters[1].name;
      posX = characters[1].posX;
      posY = characters[1].posY;

      console.log('clicked Wilma');
      console.log('Highlighted Box ----------> X: ' + userClickedPosX  + ' Y: ' + userClickedPosY);
      console.log('name: ' + name + ' x: ' + posX + ' y: ' + posY);

      if ((userClickedPosX + 25) > posX && (userClickedPosX - 25) < posX && (userClickedPosY + 25) > posY && (userClickedPosY - 25) < posY) {
        $('#image-container').prepend('<h1 id=\'correct\'>Correct</h1>');
        setTimeout(function() {
          $('#correct').remove();
        }, 3000);
        $('#wilma').remove();
        // remove the 'Waldo' element for the buttonChoices array.
        // find the index to 'Waldo' to remove it.
        var i = buttonChoices.indexOf('Wilma');
        buttonChoices.splice(i, 1);
        $('div#image-container').append('<div id=\'permanent-box-wilma\'></div>');
        $('#permanent-box-wilma').css({
          left: userClickedPosX - 20,
          top: userClickedPosY - 25
        });
      }
      else {
        $('#image-container').prepend('<h1 id=\'try-again\'>Try Again</h1>');
        setTimeout(function() {
          $('#try-again').remove();
        }, 3000);
      }

    });

    $('#wizard').click(function(event) {
      name = characters[2].name;
      posX = characters[2].posX;
      posY = characters[2].posY;

      console.log('clicked Wizard');
      console.log('Highlighted Box ----------> X: ' + userClickedPosX  + ' Y: ' + userClickedPosY);
      console.log('name: ' + name + ' x: ' + posX + ' y: ' + posY);

      if ((userClickedPosX + 25) > posX && (userClickedPosX - 25) < posX && (userClickedPosY + 25) > posY && (userClickedPosY - 25) < posY) {
        $('#image-container').prepend('<h1 id=\'correct\'>Correct</h1>');
        setTimeout(function() {
          $('#correct').remove();
        }, 3000);
        $('#wizard').remove();
        // remove the 'Waldo' element for the buttonChoices array.
        // find the index to 'Waldo' to remove it.
        var i = buttonChoices.indexOf('Wizard');
        buttonChoices.splice(i, 1);
        $('div#image-container').append('<div id=\'permanent-box-wizard\'></div>');
        $('#permanent-box-wizard').css({
          left: userClickedPosX - 20,
          top: userClickedPosY - 25
        });
      }
      else {
        $('#image-container').prepend('<h1 id=\'try-again\'>Try Again</h1>');
        setTimeout(function() {
          $('#try-again').remove();
        }, 3000);
      }

    });

  }

});
