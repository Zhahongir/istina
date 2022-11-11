const slider1 = document.querySelector('.swiper-container');
const slider2 = document.querySelector('.swiper-container2');

const swiper1 = new Swiper('.swiper-container', {
    loop: false,
    pagination: {
        el: '.swiper-pagination1',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return '0' + current + ' ' + '/' + ' ' + '0' + (total); 
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
        nextEl: '.next-slider1',
        prevEl: '.prev-slider1',
    },
    breakpoints: {
        992: {
        slidesPerView: 1,
        slidesPerView: 'auto',
        spaceBetween: 0,
        },
        991: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        576: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        320: {
        slidesPerView: 1,
        spaceBetween: 0,
        }
    }
});


// Fashion Slider
const swiper4 = new Swiper('.swiper-container2', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: '.fashion-pagination',
  },
  navigation: {
      nextEl: '.next-slider3',
      prevEl: '.prev-slider3',
  },
  breakpoints: {
      1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      },
      991: {
      slidesPerView: 3,
      spaceBetween: 15,
      },
      768: {
      slidesPerView: 3,
      spaceBetween: 12,
      },
      576: {
      slidesPerView: 2,
      spaceBetween: 15,
      },
      320: {
      slidesPerView: 2,
      spaceBetween: 10,
      }
  }
});


// Fashion Product Slider
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
    992: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".card-swiper-btn-next",
      prevEl: ".card-swiper-btn-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});