/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */

// animation class
const classAnimationVisible = 'animation-visible';
const classAnimationHidden = 'animation-hidden';
const classAnimationIcon = 'animation-icon';
const classAnimationDropdownOpen = 'animation-dropdown-open';
const classAnimationDropdownClose = 'animation-dropdown-close';
const classAnimationModalOpen = 'animation-modal-open';
const classAnimationModalClose = 'animation-modal-close';

const body = document.body;
const preloader = document.getElementById('preloader');
const header = document.querySelector('.header');
const headerBreadcrumbs = document.querySelector('.header-breadcrumbs');
const listLinksheaderBreadcrumbs = document.querySelector(
  '.header-breadcrumbs__list'
);
const main = document.querySelector('main');
const locationSearchName = window.location.search.replace(/[^a-zа-яё]/gi, '');

function contentLocation(locationName, title, arrayLink) {
  document.title = `SitDownPls - ${title}`;

  header.classList.add('header-bottom');
  headerBreadcrumbs.classList.add('header-breadcrumbs-active');
  const lastChildArray = arrayLink[arrayLink.length - 1];

  arrayLink.forEach((link) => {
    const itemheaderBreadcrumbs = document.createElement('li');
    const linkheaderBreadcrumbs = document.createElement('a');
    itemheaderBreadcrumbs.classList.add('header-breadcrumbs__item');
    if (link !== lastChildArray)
      linkheaderBreadcrumbs.classList.add('header-breadcrumbs__item-link');
    linkheaderBreadcrumbs.textContent = link;

    if (link === lastChildArray)
      linkheaderBreadcrumbs.classList.add('header-breadcrumbs__item-link-and');
    linkheaderBreadcrumbs.href = '#';
    linkheaderBreadcrumbs.textContent = link;
    if (link === 'Главная')
      linkheaderBreadcrumbs.href = `${location.origin + location.pathname}`;
    if (link === 'Каталог') linkheaderBreadcrumbs.href = '?catalog';
    if (link === 'Диваны') linkheaderBreadcrumbs.href = '?catalog';
    if (link === 'Прямые диваны' && locationName === 'card')
      linkheaderBreadcrumbs.href = '?catalog';

    itemheaderBreadcrumbs.append(linkheaderBreadcrumbs);
    listLinksheaderBreadcrumbs.append(itemheaderBreadcrumbs);
  });

  main.className = `main-${locationName}`;
  document.getElementById('main-index').style.display = 'none';
  document.getElementById(`${locationName}`).style.display = 'block';
}

window.addEventListener('load', () => {
  preloader.remove();
});

switch (locationSearchName) {
  case 'catalog':
    contentLocation(locationSearchName, 'Каталог', [
      'Главная',
      'Каталог',
      'Диваны',
      'Прямые диваны',
    ]);
    break;
  case 'card':
    contentLocation(locationSearchName, 'Диван тканевый прямой “D-31”', [
      'Главная',
      'Каталог',
      'Диваны',
      'Прямые диваны',
      'D-31',
    ]);
    break;
  case 'cooperation':
    contentLocation(locationSearchName, 'Сотрудничество', [
      'Главная',
      'Сотрудничество',
    ]);
    break;
  case 'contacts':
    contentLocation(locationSearchName, 'Контакты', ['Главная', 'Контакты']);
    break;
}

// scroll
const btnScroll = document.getElementById('btn-scroll');

function eventBtnScroll(btn) {
  function visibleAndHiddenBtn(btnScroll) {
    if (window.pageYOffset >= 200) btnScroll.style.display = 'flex';
    else btnScroll.style.display = 'none';
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('load', () => visibleAndHiddenBtn(btn));
  window.addEventListener('scroll', () => visibleAndHiddenBtn(btn), {
    passive: true,
  });
}
eventBtnScroll(btnScroll);

// header

// header // select
const selectHeader = document.getElementById('select');

selectHeader.append(
  select(
    {
      name: 'Москва',
      classContainer: 'header__select-box',
      classSelect: {
        main: 'header__select',
        active: classAnimationIcon,
      },
      classDropdown: {
        main: 'header__select-dropdown',
        open: classAnimationVisible,
        close: classAnimationHidden,
      },
    },
    [
      { name: 'Казань', class: 'header__select-dropdown-btn' },
      { name: 'Уфа', class: 'header__select-dropdown-btn' },
      { name: 'Пермь', class: 'header__select-dropdown-btn' },
    ]
  )
);

// header // search
const searchHeader = document.getElementById('search');
const iconSearchHeader = document.getElementById('search-icon');

searchHeader.addEventListener('input', function () {
  this.classList.add('input-active');
  iconSearchHeader.style.fill = '#A65CF0';
  if (this.value !== '') {
  } else {
    iconSearchHeader.style.fill = '#999999';
    this.classList.remove('input-active');
  }
});

// header // dropdown
const dropdownBtnHeader = document.getElementById('dropdown-btn');
const dropdownHeader = document.getElementById('dropdown');

dropdownBtnHeader.addEventListener('click', function () {
  if (dropdownHeader.classList.contains(classAnimationDropdownOpen)) {
    this.classList.remove(classAnimationIcon);
    elemHidden(
      dropdownHeader,
      classAnimationDropdownOpen,
      classAnimationDropdownClose
    );
  } else {
    this.classList.add(classAnimationIcon);
    elemVisible(dropdownHeader, classAnimationDropdownOpen, 'flex');
  }
});
body.addEventListener('click', (el) => {
  if (
    !dropdownBtnHeader.contains(el.target) &&
    !dropdownHeader.contains(el.target)
  ) {
    dropdownBtnHeader.classList.remove(classAnimationIcon);
    elemHidden(
      dropdownHeader,
      classAnimationDropdownOpen,
      classAnimationDropdownClose
    );
  }
});

// header // menu
const menuHeader = document.getElementById('menu');
const navHeader = document.getElementById('nav');
const btnOpenMenuHeader = document.getElementById('menu-open');
const btnCloseMenuHeader = document.getElementById('menu-close');

btnOpenMenuHeader.addEventListener('click', () => {
  elemVisible(menuHeader, classAnimationDropdownOpen, 'block');
  if (window.screen.width <= 664)
    elemVisible(navHeader, classAnimationDropdownOpen, 'block');
});
btnCloseMenuHeader.addEventListener('click', () => {
  elemHidden(
    menuHeader,
    classAnimationDropdownOpen,
    classAnimationDropdownClose
  );
  if (window.screen.width <= 664)
    elemHidden(
      navHeader,
      classAnimationDropdownOpen,
      classAnimationDropdownClose
    );
});
body.addEventListener('click', (el) => {
  if (
    !btnOpenMenuHeader.contains(el.target) &&
    !menuHeader.contains(el.target) &&
    !navHeader.contains(el.target)
  ) {
    if (window.screen.width <= 992)
      elemHidden(
        menuHeader,
        classAnimationDropdownOpen,
        classAnimationDropdownClose
      );
    if (window.screen.width <= 664)
      elemHidden(
        navHeader,
        classAnimationDropdownOpen,
        classAnimationDropdownClose
      );
  }
});

// section-banner
const popupBanner = document.getElementById('banner-popup');
if (popupBanner) {
  const btnsBanner = document.querySelectorAll('.section-banner__slide-btn');
  const btnBannerSM = document.getElementById('btn-banner');

  function eventBtnPopupBanner(btn) {
    btn.addEventListener('click', () => {
      elemVisible(popupBanner, classAnimationVisible, 'block');
      btn.disabled = true;
      setTimeout(() => {
        elemHidden(popupBanner, classAnimationVisible, classAnimationHidden);
      }, 2600);
    });
  }

  btnsBanner.forEach((btn) => {
    eventBtnPopupBanner(btn);
    function btnBannerTextContent() {
      if (window.screen.width < 1321) {
        btn.textContent = 'Получить!';
      }
    }
    window.addEventListener('load', btnBannerTextContent());
    window.addEventListener('resize', btnBannerTextContent());
  });
  eventBtnPopupBanner(btnBannerSM);
}

// section-rating
const btnRating = document.getElementById('more-goods');
if (btnRating) {
  const itemRating = document.querySelectorAll('.section-rating__item-content');

  btnRating.addEventListener('click', function () {
    itemRating.forEach((item) => {
      if (window.getComputedStyle(item).display === 'none') {
        elemVisible(item, classAnimationModalOpen, 'block');
      }
    });
    this.style.display = 'none';
  });
}

// section-catalog
const sectionCatalog = document.querySelector('.section-catalog');
if (sectionCatalog && location.search === '?catalog') {
  // section-catalog // checkbox-btn
  createBtnAndHidingItem(
    9,
    'section-catalog__sidebar-checkbox-list',
    'section-catalog__sidebar-checkbox-item',
    'section-catalog__sidebar-checkbox-btn',
    'section-catalog__sidebar-checkbox-item-active'
  );

  // section-catalog // Category and Color
  const nameplateFromPrice = document.querySelector(
    '.section-catalog__header-nameplate-price-1'
  );
  const labelCategory = '.section-catalog__sidebar-label-category';
  const nameplateDiscount = document.querySelector(
    '.section-catalog__header-nameplate-discount'
  );
  const labelColor = '.section-catalog__sidebar-label-color';

  eventCheckboxNameplate(labelCategory, nameplateFromPrice, 'beforebegin');
  eventCheckboxNameplate(labelColor, nameplateDiscount, 'afterend');

  // section-catalog // price
  const rangeSlider = document.getElementById('range-slider');
  const inputFromPrice = document.getElementById('sidebar-input-from');
  const inputBeforePrice = document.getElementById('sidebar-input-before');
  const valueinputFromPrice = document.getElementById(
    'value-sidebar-input-from'
  );
  const valueinputBeforePrice = document.getElementById(
    'value-sidebar-input-before'
  );
  const nameplateBeforePrice = document.querySelector(
    '.section-catalog__header-nameplate-price-2'
  );
  const btnCloseFromPrice = document.getElementById('btn-close-price-from');
  const btnClosePriceBefore = document.getElementById('btn-close-price-before');
  const inputs = [inputFromPrice, inputBeforePrice];

  function throwValuePrice(btn, input, nameplate) {
    btn.addEventListener('click', () => {
      input.value = '0';
      nameplate.style.display = 'none';
    });
  }
  function displayNameplatePrice(btn, nameplate) {
    btn.addEventListener('mousedown', () => {
      nameplate.style.display = 'flex';
    });
  }

  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 500,
    range: {
      min: 0,
      max: 230000,
    },
    handleAttributes: [{ 'aria-label': 'Влево' }, { 'aria-label': 'Вправо' }],
  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setSlider(index, e.currentTarget.value);
    });
  });
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].innerHTML = Math.round(values[handle]);
    valueinputFromPrice.innerHTML = Math.round(values[0]);
    valueinputBeforePrice.innerHTML = Math.round(values[1]);
  });

  const btnRangeSliderFrom = document.querySelector(
    '#range-slider .noUi-handle'
  );
  const btnRangeSliderBefore = document.querySelector(
    '#range-slider .noUi-handle-upper'
  );
  const rangeSliderLine = document.querySelector('#range-slider .noUi-connect');

  throwValuePrice(btnCloseFromPrice, inputFromPrice, nameplateFromPrice);
  throwValuePrice(btnClosePriceBefore, inputBeforePrice, nameplateBeforePrice);
  displayNameplatePrice(inputFromPrice, nameplateFromPrice);
  displayNameplatePrice(inputBeforePrice, nameplateBeforePrice);
  displayNameplatePrice(btnRangeSliderFrom, nameplateFromPrice);
  displayNameplatePrice(btnRangeSliderBefore, nameplateBeforePrice);

  btnRangeSliderFrom.addEventListener('mousedown', () => {
    rangeSliderLine.style.background = '#7033AC';
  });
  btnRangeSliderBefore.addEventListener('mousedown', () => {
    rangeSliderLine.style.background = '#7033AC';
  });
  body.addEventListener('mousedown', () => {
    rangeSliderLine.style.background = '#A65CF0';
  });
  btnRangeSliderFrom.addEventListener('keyup', () => {
    rangeSliderLine.style.background = '#7033AC';
  });
  document.querySelector('#checkbox-24').addEventListener('keyup', () => {
    rangeSliderLine.style.background = '#A65CF0';
  });

  // section-catalog // discount
  const checkboxDiscount = document.querySelectorAll(
    '.section-catalog__sidebar-checkbox-discount'
  );
  const nameplateDescDiscount = document.querySelector(
    '.section-catalog__header-nameplate-discount-desc'
  );
  const btnClosenameplateDiscount =
    document.getElementById('btn-close-discount');

  checkboxDiscount.forEach((checbox) => {
    checbox.addEventListener('click', function () {
      nameplateDiscount.style.display = 'flex';
      nameplateDescDiscount.textContent = this.value;
    });
  });
  btnClosenameplateDiscount.addEventListener('click', () => {
    checkboxDiscount.forEach((checkbox) => {
      checkbox.checked = false;
    });
    nameplateDiscount.style.display = 'none';
  });

  // section-catalog // dropdown
  const btnsDropdownCatalog = document.querySelectorAll(
    '.section-catalog__sidebar-dropdown-btn'
  );
  const сategoryDropdownCatalog = document.querySelector(
    '.section-catalog__sidebar-checkbox-list-сategory'
  );
  const priceDropdownCatalog = document.querySelector(
    '.section-catalog__sidebar-input-container'
  );
  const discountDropdownCatalog = document.querySelector(
    '.section-catalog__sidebar-checkbox-list-discount'
  );
  const colorDropdownCatalog = document.querySelector(
    '.section-catalog__sidebar-checkbox-list-color'
  );
  const arrayDropdownCatalog = [
    сategoryDropdownCatalog,
    priceDropdownCatalog,
    discountDropdownCatalog,
    colorDropdownCatalog,
  ];

  btnsDropdownCatalog.forEach((btn, indexBtn) => {
    btn.addEventListener('click', () => {
      if (arrayDropdownCatalog[indexBtn].style.display === 'flex') {
        btn.classList.remove('btn-active');
        elemHidden(
          arrayDropdownCatalog[indexBtn],
          classAnimationDropdownOpen,
          classAnimationDropdownClose
        );
      } else {
        btn.classList.add('btn-active');
        elemVisible(
          arrayDropdownCatalog[indexBtn],
          classAnimationDropdownOpen,
          'flex'
        );
      }
    });
    body.addEventListener('click', (el) => {
      if (
        !btn.contains(el.target) &&
        !arrayDropdownCatalog[indexBtn].contains(el.target)
      ) {
        if (window.screen.width <= 1320) {
          btn.classList.remove('btn-active');
          elemHidden(
            arrayDropdownCatalog[indexBtn],
            classAnimationDropdownOpen,
            classAnimationDropdownClose
          );
        }
      }
    });
  });

  // section-catalog // tabs
  const tabsBtnCatalog = document.querySelectorAll(
    '.section-catalog__tabs-btn'
  );

  tabsBtnCatalog.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path;
      document
        .querySelectorAll('.section-catalog__tabs-list')
        .forEach((list) => {
          list.classList.remove('section-catalog__tabs-list-active');
        });
      tabsBtnCatalog.forEach((allBtn) =>
        allBtn.classList.remove('section-catalog__tabs-btn-active')
      );
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add('section-catalog__tabs-list-active');
      btn.classList.add('section-catalog__tabs-btn-active');
    });
  });
}

// section-card // form-modal & // section-dispatch // form
const btnCardOpenModalForm = document.querySelector('.card-content__btn');
if (btnCardOpenModalForm) {
  const btnsCardOpenModalForm = document.querySelectorAll('.card-content__btn');
  const btnSpecialOpenModalForm = document.querySelectorAll(
    '.section-special__card-btn'
  );
  const btnCardOpenModalFrom = document.querySelector(
    '.section-card__btn-main'
  );
  const boxModalForm = document.getElementById('box-modal-form');
  const containerModalForm = document.getElementById('container-modal-form');
  const btnCloseModalFrom = document.getElementById('close-modal-form');
  let arrayBtnOpenModalForm = [];
  let btnclick;

  btnsCardOpenModalForm.forEach((el) => arrayBtnOpenModalForm.push(el));
  if (btnSpecialOpenModalForm)
    btnSpecialOpenModalForm.forEach((el) => arrayBtnOpenModalForm.push(el));
  if (btnCardOpenModalFrom) arrayBtnOpenModalForm.push(btnCardOpenModalFrom);

  arrayBtnOpenModalForm.forEach((btn) => {
    btn.addEventListener('click', function () {
      elemVisible(boxModalForm, classAnimationModalOpen, 'flex');
      btnclick = this;
    });
  });

  body.addEventListener('click', (el) => {
    if (btnclick !== undefined)
      if (
        !btnclick.contains(el.target) &&
        !containerModalForm.contains(el.target)
      )
        elemHidden(
          boxModalForm,
          classAnimationModalOpen,
          classAnimationModalClose
        );
  });
  btnCloseModalFrom.addEventListener('click', () =>
    elemHidden(boxModalForm, classAnimationModalOpen, classAnimationModalClose)
  );

  // section-card // form and // section-dispatch // form
  const popupResponse = document.getElementById('popup-response');
  const containerPopupResponse = document.getElementById(
    'container-popup-response'
  );
  const descPopupResponse = document.getElementById('content-response');
  const closeBtnPopupResponse = document.getElementById('close-popup-response');
  const formModal = document.getElementById('form-modal');
  const formDispatch = document.getElementById('form-dispatch');

  function responsePopup(text, inputs) {
    inputs.forEach((input) => (input.value = ''));
    elemVisible(popupResponse, classAnimationModalOpen, 'flex');
    descPopupResponse.textContent = text;
    closeBtnPopupResponse.addEventListener('click', () => {
      elemHidden(
        popupResponse,
        classAnimationModalOpen,
        classAnimationModalClose
      );
    });
    body.addEventListener('click', (el) => {
      if (
        !containerPopupResponse.contains(el.target) &&
        !boxModalForm.contains(el.target) &&
        !formDispatch.contains(el.target)
      ) {
        elemHidden(
          popupResponse,
          classAnimationModalOpen,
          classAnimationModalClose
        );
      }
    });
  }
  function eventInputFrom(inputs) {
    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        this.classList.add('input-active');
        if (this.value !== '') {
        } else this.classList.remove('input-active');
      });
    });
  }

  if (formModal) {
    const inputsModal = document.querySelectorAll('.modal-form__form-input');
    const telInputModal = document.getElementById('tel-modal');

    eventInputFrom(inputsModal);

    const telMask = new Inputmask('+7 (999)-999-99-99');
    telMask.mask(telInputModal);

    new JustValidate('#form-modal', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 20,
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = telInputModal.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
        },
      },
      colorWrong: '#FF6972',

      submitHandler: function (form, values, ajax) {
        ajax({
          url: '/php/getPostValue.php',
          method: 'POST',
          data: values,
          async: true,
          callback: function () {
            elemHidden(
              boxModalForm,
              classAnimationModalOpen,
              classAnimationModalClose
            );
            responsePopup('Спасибо, мы вам перезвоним!', inputsModal);
          },
          error: function () {
            elemHidden(
              boxModalForm,
              classAnimationModalOpen,
              classAnimationModalClose
            );
            responsePopup('Ошибка отправки!', inputsModal);
          },
        });
      },
    });
  }

  if (formDispatch) {
    const inputsDispatch = document.querySelectorAll(
      '.section-dispatch__form-input'
    );
    const telInputDispatch = document.getElementById('tel-dispatch');

    eventInputFrom(inputsDispatch);

    const telMask = new Inputmask('+7 (999)-999-99-99');
    telMask.mask(telInputDispatch);

    new JustValidate('#form-dispatch', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 20,
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = telInputDispatch.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
        },
        mail: {
          required: true,
          email: true,
        },
      },
      colorWrong: '#FF6972',

      submitHandler: function (form, values, ajax) {
        ajax({
          url: '/php/getPostValue.php',
          method: 'POST',
          data: values,
          async: true,
          callback: function () {
            responsePopup('Спасибо, мы вам перезвоним!', inputsDispatch);
          },
          error: function () {
            responsePopup('Ошибка отправки!', inputsDispatch);
          },
        });
      },
    });
  }
}

// section-card
const sectionCard = document.querySelector('.section-card');
if (sectionCard && location.search === '?card') {
  const btnMainImgCard = document.getElementById('btn-main-img-modal');
  const allImgMainCard = document.querySelectorAll(
    '.section-card__img-box-main'
  );
  const btnsSlideImgCard = document.querySelectorAll('.section-card__img-btn');
  const modalCard = document.getElementById('modal-card');
  const containerModalCard = document.getElementById('container-modal-card');
  const btnCloseModalCard = document.getElementById('close-modal-card');
  const btnsSlideImgModalCard = document.querySelectorAll(
    '.modal-card__tabs-btn'
  );
  const allImgMainModalCard = document.querySelectorAll('.modal-card__img-box');

  function eventModalCard(btns, images) {
    btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const thisBtn = event.currentTarget;
        const path = event.currentTarget.dataset.path;

        btns.forEach((allBtn) => {
          allBtn.disabled = false;
          allBtn.classList.remove('btn-slide-disabled');
        });
        images.forEach((img) => {
          img.style.display = 'none';
          img.classList.remove(classAnimationVisible);
        });

        thisBtn.disabled = true;
        thisBtn.classList.add('btn-slide-disabled');
        elemVisible(
          document.querySelector(`[data-target="${path}"]`),
          classAnimationVisible,
          'block'
        );
      });
    });
  }
  eventModalCard(btnsSlideImgCard, allImgMainCard);
  eventModalCard(btnsSlideImgModalCard, allImgMainModalCard);

  btnMainImgCard.addEventListener('click', () => {
    elemVisible(modalCard, classAnimationModalOpen, 'flex');

    btnsSlideImgModalCard.forEach((allBtn) => {
      allBtn.disabled = false;
      allBtn.classList.remove('btn-slide-disabled');
    });
    allImgMainModalCard.forEach((img) => {
      img.style.display = 'none';
      img.classList.remove(classAnimationVisible);
    });
    allImgMainCard.forEach((img) => {
      if (window.getComputedStyle(img).display === 'block') {
        const imgModal = document.querySelector(
          `[data-target="img-modal-${img.dataset.target.replace(/\D+/g, '')}"]`
        );
        const btnModal = document.querySelector(
          `[data-path="img-modal-${img.dataset.target.replace(/\D+/g, '')}"]`
        );

        btnModal.disabled = true;
        btnModal.classList.add('btn-slide-disabled');
        elemVisible(imgModal, classAnimationVisible, 'block');
      }
    });
  });
  btnCloseModalCard.addEventListener('click', () => {
    elemHidden(modalCard, classAnimationModalOpen, classAnimationModalClose);
  });
  body.addEventListener('click', (el) => {
    if (
      !btnMainImgCard.contains(el.target) &&
      !containerModalCard.contains(el.target)
    ) {
      elemHidden(modalCard, classAnimationModalOpen, classAnimationModalClose);
    }
  });
}

// contacts
const map = document.getElementById('map');
if (map && location.search === '?contacts') {
  function mapApi(src) {
    const linkApi = document.getElementById('apiMap');
    const mapError = document.getElementById('map-error');
    mapError.style.display = 'none';
    linkApi.src = src;
    fetch(src)
      .then((res) => {
        if (res.status === 200) {
          const searchContacts = document.getElementById('search-contacts');
          const dropdownContacts = document.querySelector(
            '.section-contacts__form-dropdown'
          );
          const formContacts = document.getElementById('form-contacts');
          const popupContacts = document.getElementById('popup-contacts');
          let myPlacemark1;
          let myPlacemark2;

          function searchBallonMap(title, address) {
            dropdownContacts.insertAdjacentHTML(
              'beforeend',
              `<div class="section-contacts__form-dropdown-btn" role="option"><h2 class="section-contacts__form-dropdown-title">${title}</h2><address class="section-contacts__form-dropdown-address">${address}</address></div>`
            );
            const dropdownBtnsContacts = document.querySelectorAll(
              '.section-contacts__form-dropdown-btn'
            );

            function ballonOpen(placemark, popup) {
              placemark.balloon.open();
              popup.style.display = 'none';
            }
            function ballonClose(placemarks, popup, input) {
              input.classList.add('section-contacts__form-search-active');
              popup.style.display = 'block';
              setTimeout(() => {
                popup.style.display = 'none';
                input.classList.remove('section-contacts__form-search-active');
              }, 2500);
              placemarks.forEach((placemark) => placemark.balloon.close());
            }
            function btnFormClick() {
              formContacts.addEventListener('submit', (e) => {
                e.preventDefault();
                dropdownBtnsContacts.forEach(
                  (btn) => (btn.style.display = 'none')
                );
                elemHidden(
                  dropdownContacts,
                  classAnimationDropdownOpen,
                  classAnimationDropdownClose
                );
                if (searchContacts.value === 'Москва, SitDownPls на Солянке')
                  ballonOpen(myPlacemark1, popupContacts);
                else if (
                  searchContacts.value === 'Москва, SitDownPls на Покровке'
                )
                  ballonOpen(myPlacemark2, popupContacts);
                else
                  ballonClose(
                    [myPlacemark1, myPlacemark2],
                    popupContacts,
                    searchContacts
                  );
              });
            }

            searchContacts.addEventListener('input', function () {
              this.classList.add('input-active');
              for (let symbol of this.value) {
                symbol.toLowerCase();
                if (symbol) {
                  dropdownBtnsContacts.forEach((btn, btnIndex) => {
                    btn.id = `dropdown-btn-contact-${btnIndex + 1}`;
                    const dropdownBtnContacts = document.getElementById(
                      `${btn.id}`
                    );
                    const searchContentContacts =
                      dropdownBtnContacts.textContent
                        .replace(/[\s,.-]/g, '')
                        .toLowerCase();
                    if (searchContentContacts.indexOf(symbol) > -1) {
                      btn.style.display = 'flex';
                      elemVisible(
                        dropdownContacts,
                        classAnimationDropdownOpen,
                        'block'
                      );
                    } else btn.style.display = 'none';
                    btn.addEventListener('click', () => {
                      const contentTitleContacts = document.querySelector(
                        `#${btn.id} h2`
                      ).textContent;
                      searchContacts.value = contentTitleContacts;
                      elemHidden(
                        dropdownContacts,
                        classAnimationDropdownOpen,
                        classAnimationDropdownClose
                      );
                    });
                  });

                  break;
                }
              }
              if (this.value !== '') {
              } else {
                this.classList.remove('input-active');
                elemHidden(
                  dropdownContacts,
                  classAnimationDropdownOpen,
                  classAnimationDropdownClose
                );
              }
            });
            btnFormClick();
          }

          searchBallonMap(
            'Москва, SitDownPls на Солянке',
            'м. Китай-город, ул. Солянка, д.24'
          );
          searchBallonMap(
            'Москва, SitDownPls на Покровке',
            'м. Курская, ул. Покровка, д.14'
          );

          ymaps.ready(init);

          function init() {
            let myMap = new ymaps.Map('map', {
              center: [55.757353585432654, 37.635001298950186],
              zoom: 14,
            });

            function ballonContent(title, address) {
              return `<div class="popup-contacts" role="tooltipe"><h2 class="popup-contacts__title">${title}</h2><address class="popup-contacts__address">${address}</address><a class="popup-contacts__tel tel" href="tel:+74958854547" aria-label="Контактный номер телефона"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3425 14.0983C17.215 14.0983 16.1242 13.915 15.1067 13.585C14.7858 13.475 14.4283 13.5575 14.1808 13.805L12.7417 15.6108C10.1475 14.3733 7.71833 12.0358 6.42583 9.35L8.21333 7.82833C8.46083 7.57167 8.53417 7.21417 8.43333 6.89333C8.09417 5.87583 7.92 4.785 7.92 3.6575C7.92 3.1625 7.5075 2.75 7.0125 2.75H3.84083C3.34583 2.75 2.75 2.97 2.75 3.6575C2.75 12.1733 9.83583 19.25 18.3425 19.25C18.9933 19.25 19.25 18.6725 19.25 18.1683V15.0058C19.25 14.5108 18.8375 14.0983 18.3425 14.0983Z" fill="#FF862F" /></svg>+7 (495) 885-45-47</a><div class="popup-contacts__desc-time"><span class="popup-contacts__desc-alert">Часы работы:</span> с 10:00 до 21:00</div><div class="popup-contacts__desc"><span class="popup-contacts__desc-alert">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</div></div>`;
            }

            let placemarkIconBallon = {
              iconLayout: 'default#image',
              iconImageHref: 'img/favicon/placemark.svg',
              iconImageSize: [32, 21],
              hideIconOnBalloonOpen: false,
              balloonOffset: [-110, -42],
              balloonPanelMaxMapArea: 0,
            };

            if (screen.width < 664) {
              placemarkIconBallon.balloonOffset = [-55, -42];
            }

            myPlacemark1 = new ymaps.Placemark(
              [55.750615568993275, 37.64180899999995],
              {
                balloonContent: ballonContent(
                  'SitDownPls на Солянке',
                  'м. Китай-город, ул. Солянка, д.24'
                ),
              },
              placemarkIconBallon
            );
            myPlacemark2 = new ymaps.Placemark(
              [55.76226070125444, 37.65358843587206],
              {
                balloonContent: ballonContent(
                  'SitDownPls на Покровке',
                  'м. Курская, ул. Покровка, д.14'
                ),
              },
              placemarkIconBallon
            );

            myMap.geoObjects.add(myPlacemark1);
            myMap.geoObjects.add(myPlacemark2);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        mapError.style.display = 'flex';
      });
  }
  mapApi('https://api-maps.yandex.ru/2.1/?apikey=вашAPI-ключ&lang=ru_RU');
}
