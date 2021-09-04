function tabContainerClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i in $tab) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }
  for (var j = 0; j < $view.length; j++) {
    var currentDataView = event.target.getAttribute('data-view');
    if ($view[j].getAttribute('data-view') === currentDataView) {
      $view[j].className = 'view';
    } else {
      $view[j].className = 'view hidden';
    }
  }
}

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabContainerClick);
