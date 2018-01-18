$(function () {
  $('#number-chooser').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    const userTextElement = $('#number-choice').val();

    // $(".js-results").text(`user text is:  ${userTextElement.val()}`);

    // userTextElement.val("");

    console.log(userTextElement);
    

    // begin fizzbuzz portion
    for (let i = 0; i <= userTextElement; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $('.js-results').append(`
          <div class="fizz-buzz-item fizzbuzz">
            <span>fizzbuzz</span>
          </div>
        `);
      } else if (i % 3 === 0) {
        $('.js-results').append(`
          <div class="fizz-buzz-item fizz">
            <span>fizz</span>
          </div>
        `);
      } else if (i % 5 === 0) {
        $('.js-results').append(`
          <div class="fizz-buzz-item buzz">
            <span>buzz</span>
          </div>
        `);
      } else {
        $('.js-results').append(`
          <div class="fizz-buzz-item">
            <span>${i}</span>
          </div>
        `);
      }

    }

  });
});