/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const swiper = document.querySelector('.swiper');
if (swiper) {
  // section-banner__slider
  const swiperBanner = new Swiper('.section-banner__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: `swiper-pagination-bullet`,
      renderBullet: () => {
        return `<svg class="swiper-pagination-bullet" role="button" aria-label="Следующий слайд" width="25%" height="25%" viewbox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="12" fill="none"/>
        <path class="path" fill="none" stroke-width="12" stroke="#FF862F" stroke-dasharray="0,251.2" d="M50 10 a 40 40 0 0 0 0 80 a 40 40 0 0 0 0 -80"></path></svg>`;
      },
    },
    wrapperClass: 'section-banner__slider-container',
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: false,
    speed: 800,
    observer: true,
    observeParents: true,
  });

  // section-special__slider
  const swiperSpecial = new Swiper('.section-special__slider', {
    navigation: {
      prevEl: '.section-special__slider-btn-1',
      nextEl: '.section-special__slider-btn-2',
    },
    a11y: {
      prevSlideMessage: 'Влево',
      nextSlideMessage: 'Вправо',
    },
    hideOnClick: true,
    loop: true,
    speed: 1000,
    spaceBetween: 32,
    breakpoints: {
      1321: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
      },
      993: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      665: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      590: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    observer: true,
    observeParents: true,
  });

  // section-useful__slider
  const swiperUseful = new Swiper('.section-useful__slider', {
    navigation: {
      prevEl: '.section-useful__slider-btn-1',
      nextEl: '.section-useful__slider-btn-2',
    },
    a11y: {
      prevSlideMessage: 'Влево',
      nextSlideMessage: 'Вправо',
    },
    loop: false,
    speed: 1000,
    spaceBetween: 32,
    breakpoints: {
      1321: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      993: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      665: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      590: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    observer: true,
    observeParents: true,
  });

  // section-card__slider
  const swiperCard = new Swiper('.section-card__slider', {
    speed: 1000,
    spaceBetween: 38,
    slidesPerView: 'auto',
    slidesPerGroup: 4,
    breakpoints: {
      1024: {
        direction: 'horizontal',
      },
      768: {
        direction: 'vertical',
        spaceBetween: 0,
      },
    },
    observer: true,
    observeParents: true,
  });

  // section-similar__slider
  const swiperSimilar = new Swiper('.section-similar__slider', {
    navigation: {
      prevEl: '.section-similar__slider-btn-1',
      nextEl: '.section-similar__slider-btn-2',
    },
    a11y: {
      prevSlideMessage: 'Влево',
      nextSlideMessage: 'Вправо',
    },
    loop: false,
    speed: 1000,
    spaceBetween: 32,
    breakpoints: {
      1321: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      600: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 16,
      },
      450: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
    },
    observer: true,
    observeParents: true,
  });

  // modal-card__slider
  const swiperCardModal = new Swiper('.modal-card__slider', {
    navigation: {
      prevEl: '.modal-card__slider-btn-1',
      nextEl: '.modal-card__slider-btn-2',
    },
    a11y: {
      prevSlideMessage: 'Влево',
      nextSlideMessage: 'Вправо',
    },
    speed: 1000,
    spaceBetween: 78,
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    observer: true,
    observeParents: true,
  });
}
