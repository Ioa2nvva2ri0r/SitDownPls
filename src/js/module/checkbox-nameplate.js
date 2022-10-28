/* eslint-disable no-unused-vars */
function eventCheckboxNameplate(allLabel, nameplate, destination) {
  function createNameplate(
    elNameplate,
    nameplateDestination,
    id,
    name,
    content
  ) {
    let ariaLabel;
    if (name === 'сategory') ariaLabel = 'Выбранная категория';
    else ariaLabel = 'Выбранный цвет';

    elNameplate.insertAdjacentHTML(
      nameplateDestination,
      `<div class="section-catalog__header-nameplate section-catalog__header-nameplate-${name}" id="nameplate-${id}"><span class="section-catalog__header-nameplate-${name}-desc" role="note" aria-label="${ariaLabel}">${content}</span><button class="section-catalog__header-nameplate-btn" aria-label="Закрыть выбранный фильтр" id="close-nameplate-${id}"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5999 8.40002L8.3999 15.6" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.3999 8.40002L15.5999 15.6" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`
    );
    document
      .getElementById(`close-nameplate-${id}`)
      .addEventListener('click', () => {
        document.getElementById(`nameplate-${id}`).remove();
        document.getElementById(`checkbox-${id}`).checked = false;
      });
  }
  document.querySelectorAll(allLabel).forEach((label) => {
    const checkboxId = parseInt(
      label.querySelector('input').id.replace(/[^\d]/g, '')
    );
    const checkboxName = label.querySelector('input').name;
    const checkboxValue = label.querySelector('input').value;

    if (label.querySelector('input').checked)
      createNameplate(
        nameplate,
        destination,
        checkboxId,
        checkboxName,
        checkboxValue
      );
    label.querySelector('input').addEventListener('change', (checkbox) => {
      if (checkbox.currentTarget.checked == true)
        createNameplate(
          nameplate,
          destination,
          checkboxId,
          checkboxName,
          checkboxValue
        );
      else document.getElementById(`nameplate-${checkboxId}`).remove();
    });
  });
}
