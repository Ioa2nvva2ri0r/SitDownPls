/* eslint-disable no-unused-vars */
function select(select = {}, options = []) {
  const containerSelect = document.createElement('div');
  const selectBtn = document.createElement('button');
  const selectDropdown = document.createElement('div');
  let content;

  containerSelect.classList.add(select.classContainer);
  selectBtn.classList.add(select.classSelect.main);
  selectDropdown.classList.add(select.classDropdown.main);
  selectDropdown.style.display = 'none';
  selectBtn.textContent = select.name;
  selectBtn.name = 'Фильтр';

  function svgIcon(el) {
    el.insertAdjacentHTML(
      'beforeend',
      '<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65674 5.80521L10.5593 0.902607L11.3136 1.65685L5.65674 7.31371L-0.000115871 1.65685L0.754131 0.902607L5.65674 5.80521Z" fill="#A65CF0"/></svg>'
    );
  }
  svgIcon(selectBtn);

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

  selectBtn.addEventListener('click', () => {
    content = selectBtn.textContent;
    if (selectDropdown.style.display === 'none') {
      selectBtn.classList.add(select.classSelect.active);
      elemVisible(selectDropdown, select.classDropdown.open, 'flex');
    } else {
      selectBtn.classList.remove(select.classSelect.active);
      elemHidden(
        selectDropdown,
        select.classDropdown.open,
        select.classDropdown.close
      );
    }
  });

  document.body.addEventListener('click', (el) => {
    if (selectDropdown.style.display === 'none') return;
    if (!selectDropdown.contains(el.target) && !selectBtn.contains(el.target)) {
      selectBtn.classList.remove(select.classSelect.active);
      elemHidden(
        selectDropdown,
        select.classDropdown.open,
        select.classDropdown.close
      );
    }
  });

  options.forEach((el) => {
    const optionBtn = document.createElement('button');

    optionBtn.classList.add(el.class);
    optionBtn.textContent = el.name;
    optionBtn.value = el.name;

    optionBtn.addEventListener('click', () => {
      selectBtn.textContent = optionBtn.textContent;
      svgIcon(selectBtn);
      optionBtn.textContent = content;
      selectBtn.classList.remove(select.classSelect.active);
      elemHidden(
        selectDropdown,
        select.classDropdown.open,
        select.classDropdown.close
      );
    });

    selectDropdown.append(optionBtn);
  });

  containerSelect.append(selectBtn, selectDropdown);

  return containerSelect;
}
