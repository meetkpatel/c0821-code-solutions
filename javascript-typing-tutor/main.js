var counter = 0;
function spanElementsPress(event) {
  var currentChar = $spanElements[counter].textContent;
  if (event.key === currentChar) {
    $spanElements[counter].className = 'span-green';
    counter++;
    $spanElements[counter].className = 'span-under';
  } else {
    $spanElements[counter].className = 'span-red';
  }

}
var $spanElements = document.querySelectorAll('span');
$spanElements[counter].className = 'span-under';
// $spanElements.addEventListener('keydown', spanElementsPress);
document.addEventListener('keydown', spanElementsPress);
