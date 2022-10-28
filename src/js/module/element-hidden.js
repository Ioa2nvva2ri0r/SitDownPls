/* eslint-disable no-unused-vars */
function elemVisible(el, classOpen, display) {
  el.style.display = display;
  el.classList.add(classOpen);
}

function elemHidden(el, classOpen, classClose) {
  el.classList.remove(classOpen);
  el.classList.add(classClose);
  setTimeout(() => {
    el.style.display = 'none';
    el.classList.remove(classClose);
  }, 400);
}

function popupClose(modal, classClose) {
  modal.classList.add(classClose);
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove(classClose);
  }, 400);
}
