const isVisible = function (element) {
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return Boolean(
    window.getComputedStyle(element).getPropertyValue('opacity') > 0
    && (rect.height || rect.width)
  );
};

const clickListener = function (e) {
  const element = document.querySelector('.navbar__menu');
  const outside = !element.contains(e.target) && isVisible(element);
  if (outside) {
    removeListeners();
    element.classList.remove('open');
  }
};

const escListener = function (e) {
  const element = document.querySelector('.navbar__menu');
  if (e.key === 'Escape' && isVisible(element)) {
    removeListeners();
    element.classList.remove('open');
  }
};

const addListeners = function () {
  window.addEventListener('click', clickListener);
  window.addEventListener('keydown', escListener);
};

const removeListeners = function () {
  window.removeEventListener('click', clickListener);
  window.removeEventListener('keydown', escListener);
};

document.querySelector('.navbar__menu-button').addEventListener('click', function () {
  const menu = document.querySelector('.navbar__menu');
  if (menu.classList.contains('open')) {
    removeListeners();
    menu.classList.remove('open');
  } else {
    addListeners();
    menu.classList.add('open');
  }
});
