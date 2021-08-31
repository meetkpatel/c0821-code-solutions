var counterCount = 0;
function hotButtonClick(event) {
  counterCount++;
  if (counterCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (counterCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counterCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counterCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counterCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
  $clickCount.textContent = ('Clicks: ' + counterCount);
}

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', hotButtonClick);
