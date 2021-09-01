var msgData = {};
function contactFormSubmit(event) {
  event.preventDefault();
  msgData.name = $contactForm.elements.name.value;
  msgData.email = $contactForm.elements.email.value;
  msgData.message = $contactForm.elements.message.value;
  console.log('message data:', msgData);
}
var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', contactFormSubmit);
