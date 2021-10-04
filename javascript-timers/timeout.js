var $h1 = document.querySelector('h1');

setTimeout(changeH1Text, 2000);

function changeH1Text() {
  $h1.textContent = 'Hello There';
}
