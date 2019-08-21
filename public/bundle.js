function isVisible (element) {
  if (!element) {
    return false;
  }
  var rect = element.getBoundingClientRect();
  return Boolean(
    window.getComputedStyle(element).getPropertyValue('opacity') > 0
    && (rect.height || rect.width)
  );
}

function clickListener (e) {
  var element = document.querySelector('.navbar__menu');
  var outside = !element.contains(e.target) && isVisible(element);
  if (outside) {
    removeListeners();
    element.classList.remove('open');
  }
}

function escListener (e) {
  var element = document.querySelector('.navbar__menu');
  if (e.key === 'Escape' && isVisible(element)) {
    removeListeners();
    element.classList.remove('open');
  }
}

function addListeners () {
  window.addEventListener('click', clickListener);
  window.addEventListener('keydown', escListener);
}

function removeListeners () {
  window.removeEventListener('click', clickListener);
  window.removeEventListener('keydown', escListener);
}

document.querySelector('.navbar__menu-button').addEventListener('click', function () {
  var menu = document.querySelector('.navbar__menu');
  if (menu.classList.contains('open')) {
    removeListeners();
    menu.classList.remove('open');
  } else {
    addListeners();
    menu.classList.add('open');
  }
});
