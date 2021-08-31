var toggle = true;
function circleDivClick(event) {
  if (toggle === true) {
    $circleDiv.className = 'circle-on';
    $containerElement.className = 'container-on';
    toggle = false;
  } else {
    $circleDiv.className = 'circle';
    $containerElement.className = 'container';
    toggle = true;
  }
}
var $circleDiv = document.querySelector('.circle');
var $containerElement = document.querySelector('.container');

$circleDiv.addEventListener('click', circleDivClick);

// create toggle as boolean value false
// create fucntion to handel click event
// check if toggle is true
//      if yes set circle div class name to circle-on
//      set container div class name to container-on
//      set toggle to false
// else
// set circle div class name to circle
// set container div class name to container
// set toggle to true
// get circle div propert and store it to variable
// get container div propert and store it to variable
// create an event for click and select target as circle div and action listner as created function name
