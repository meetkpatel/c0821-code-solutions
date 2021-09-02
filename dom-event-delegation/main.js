function taskListClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('button clicked');
    var $currentClosest = event.target.closest('.task-list-item');
    console.log('closest:', $currentClosest);
    $currentClosest.remove();

  }
}

var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', taskListClick);
