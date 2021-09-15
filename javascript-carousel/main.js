var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var currentImgIndex = 0;

var $img = document.querySelector('img');
var $rightArrow = document.querySelector('#rightArrow');
var $leftArrow = document.querySelector('#leftArrow');
var $circleBtnEvent = document.querySelector('.circle-btn-event');
var $circleBtnNodes = document.querySelectorAll('.circle-btn');
$rightArrow.addEventListener('click', nextImg);
$leftArrow.addEventListener('click', previousImg);
$circleBtnEvent.addEventListener('click', circleBtnClick);

var timerId = setInterval(nextImg, 3000);

function nextImg() {
  if (currentImgIndex === 4) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  $img.setAttribute('src', imgArray[currentImgIndex]);
  changeBtn(currentImgIndex);
}

function previousImg() {
  if (currentImgIndex === 0) {
    currentImgIndex = 4;
  } else {
    currentImgIndex--;
  }
  $img.setAttribute('src', imgArray[currentImgIndex]);
  changeBtn(currentImgIndex);
}

function circleBtnClick(event) {
  if (!event.target.matches('i')) {
    return;
  }
  changeBtn(event.target.getAttribute('circle-btn-id'));
  currentImgIndex = parseInt(event.target.getAttribute('circle-btn-id'));
  $img.setAttribute('src', imgArray[currentImgIndex]);

  clearInterval(timerId);
  timerId = setInterval(nextImg, 3000);
}

function changeBtn(circleid) {
  for (var i = 0; i < $circleBtnNodes.length; i++) {
    if (parseInt($circleBtnNodes[i].getAttribute('circle-btn-id')) === parseInt(circleid)) {
      $circleBtnNodes[i].setAttribute('class', 'fas fa-circle circle-btn');
    } else {
      $circleBtnNodes[i].setAttribute('class', 'far fa-circle circle-btn');
    }
  }
}
