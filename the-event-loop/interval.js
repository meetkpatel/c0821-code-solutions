var counter = 3;
var interval = setInterval(changeInterval, 700);

function changeInterval() {
  if (counter < 1) {
    console.log('Blast off!');
    clearInterval(interval);
  } else { console.log(counter); }
  counter--;
}
