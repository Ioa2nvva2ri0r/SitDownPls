/* eslint-disable no-unused-vars */
function createBtnAndHidingItem(
  limitQuantity,
  classList,
  classItem,
  classBtn,
  classActive
) {
  const listCheckboxCatalog = document.querySelectorAll(`.${classList}`);

  listCheckboxCatalog.forEach((el) => {
    if (el.children.length > limitQuantity) {
      const fullLength = el.children.length;
      const rangeLength = fullLength - limitQuantity;
      const arr = Array.from(el.children);
      const hiddenItems = arr.slice(fullLength - rangeLength, fullLength);
      hiddenItems.forEach((el) => {
        el.classList.add(`${classActive}`);
      });
      el.insertAdjacentHTML(
        'beforeend',
        `<button class="${classBtn}">+ ещё ${hiddenItems.length}</button>`
      );
    }
  });

  const btnListCheckboxCatalog = document.querySelectorAll(`.${classBtn}`);

  btnListCheckboxCatalog.forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = e.currentTarget.closest(`.${classList}`);
      if (!el.classList.contains(`${classActive}`)) {
        el.classList.add(`${classActive}`);
        el.textContent = 'Свернуть';
        parent.querySelectorAll(`.${classItem}`).forEach((el) => {
          el.classList.remove(`${classActive}`);
        });
      } else {
        el.classList.remove(`${classActive}`);
        el.textContent = 'Показать все';
        const fullLength = parent.children.length;
        const rangeLength = fullLength - limitQuantity;
        const arr = Array.from(parent.children);
        const hiddenItems = arr.slice(fullLength - rangeLength, fullLength - 1);
        hiddenItems.forEach((el) => {
          el.classList.add(`${classActive}`);
        });
      }
    });
  });
}
