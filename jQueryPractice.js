Select the element that was clicked on with this:

$('.some-class').click(function() {
  $(this);
});

Test that you've selected the correct DOM element:

$('.element-to-select').css('background-color', 'green');

Test that you've properly attached an event handler:

$('.element-to-select').click(function() {
  alert('hi');
});

