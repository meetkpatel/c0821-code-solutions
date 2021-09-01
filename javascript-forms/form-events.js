function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}
function handleInput(event) {
  console.log('value of Name: ', event.target.value);
}

var $userName = document.getElementById('user-name');
var $userEmail = document.getElementById('user-email');
var $userMsg = document.getElementById('user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMsg.addEventListener('focus', handleFocus);
$userMsg.addEventListener('blur', handleBlur);
$userMsg.addEventListener('input', handleInput);
