function openModelBtnClick(event) {
  $surveyDiv.className = 'survey-show';
}
function surveyNoBtnClick(event) {
  $surveyDiv.className = 'survey-hide';
}

var $openModelBtn = document.querySelector('.btnBlue');
var $surveyNoBtn = document.querySelector('.surveyButton');
var $surveyDiv = document.querySelector('.survey-hide');

$openModelBtn.addEventListener('click', openModelBtnClick);
$surveyNoBtn.addEventListener('click', surveyNoBtnClick);
