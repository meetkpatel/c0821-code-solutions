var $h1 = document.querySelector('h1');

var timer = setInterval(changeH1Text, 1000);

function changeH1Text() {
  var newText = $h1.textContent;
  if (parseInt(newText) === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
    return;
  }
  newText--;
  $h1.textContent = newText;
}
