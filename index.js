'use strict';

// In this challenge, you need to write JavaScript that provides the following experience: when a user selects one of the thumbnail images using the mouse or keyboard,
// that image should be displayed in the full-size image container at the top. Updating the image should also update its alt attribute. 
// To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.

// Some of the methods we discussed in the previous assignment might be helpful here, but you should also use the jQuery docs and Google if you're not sure what to do here. 
// Researching on your own is a key skill, and it'll get easier with practice.

function carousel() {
  $('.thumbnail').click(function (event) {
    var img = $(this).find('img').attr('src');
    $('.hero').find('img').attr('src', img)
  });
}

$(carousel);