$(document).ready(function() {

  $('button').each(function(index, element) {
    // 'this' refers to the element.
    $(this).click(function() {
      if ($(this).text() == 'Play') {
        var src = $($($(this).parentsUntil('picture-buttons').get(1)).find('img')[0]).attr('src');
        if ($(this).attr('id') == 'The Town') {
          loadPuzzle(src);
          userInput();
        }
        else if ($(this).attr('id') == 'FVN and Games in Ancient Rome') {
          loadPuzzle(src);
          userInput();
        }
        else if ($(this).attr('id') == 'The Gobbling Gluttons') {
          loadPuzzle(src);
          userInput();
        }
      }
      else {
        if ($(this).attr('id') == 'The Town') {
          console.log('view SCORES for the town');
        }
        else if ($(this).attr('id') == 'FVN and Games in Ancient Rome') {
          console.log('view SCORES for rvn and games in acient rome');
        }
        else if ($(this).attr('id') == 'The Gobbling Gluttons') {
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
    $('body').css({margin: '0', padding: '0'});
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

  function userInput() {
    $('#puzzle-picture').click(function(event) {
      console.log('X: ' + event.pageX + ' ' + 'Y: ' + event.pageY);
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
        $('div#character-options').append('<p><b>Who Did You Find?</b></p>');
        $('div#character-options').append('<button id=\'waldo\'>Waldo</button>');
        $('div#character-options').append('<button id=\'wilma\'>Wilma</button>');
        $('div#character-options').append('<button id=\'wizard\'>Wizard</button>');
        $('div#character-options').fadeIn('slow', 5000);
        $('div#user-prompt').css({
          left: event.pageX - 20,
          top: event.pageY - 25
        });
      }
    });
  }

});
