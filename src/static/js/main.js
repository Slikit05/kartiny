$(document).ready(function () {

  if ($(window).width() >= '991') {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $('.header').addClass('fixed');
        $('.header-down').slideUp();
        $('.header-up__up').slideUp();
        $(".row-toggle").animate({
          width: "show"
        }, 500);
        $('.toggle-nav').removeClass('toggle-nav--open');
      } else if ($(this).scrollTop() < 10) {
        $('.header').removeClass('fixed');
        $('.header-down').slideDown();
        $('.header-up__up').slideDown();
        $(".row-toggle").animate({
          width: "hide"
        }, 500);
      }
    });
    $('#katalog').click(function () {
      var
        $this = $(this),
        $rel = $('#menu');
      if ($rel.hasClass('toggle-nav--open')) {
        $rel.removeClass('toggle-nav--open')
        $('.header-up__up').slideUp();
      }
      $(this).toggleClass('toggle-nav--open');
      $('.header-down').slideToggle();
    });

    $('#menu').click(function () {
      var
        $this = $(this),
        $rel = $('#katalog');
      if ($rel.hasClass('toggle-nav--open')) {
        $rel.removeClass('toggle-nav--open')
        $('.header-down').slideUp();
      }
      $(this).toggleClass('toggle-nav--open');
      $('.header-up__up').slideToggle();
    });

    $('.search-line__field').focus(function () {
      $(this).closest('.search-line__form').addClass('search-line__form--active');
    });

    $('.search-line__field').blur(function () {
      $(this).closest('.search-line__form').removeClass('search-line__form--active');
    });


    $('.line-form__field').focus(function () {
      $(this).closest('.line-form__wrap').addClass('line-form__wrap--active');
    });

    $('.line-form__field').blur(function () {
      $(this).closest('.line-form__wrap').removeClass('line-form__wrap--active');
    });
  }

  if ($(window).width() <= '991') {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $('.header').addClass('fixed');

      } else if ($(this).scrollTop() < 10) {
        $('.header').removeClass('fixed');
      }
    });

    $('#menu').click(function () {
      $('html').addClass('hiden');
      $('.header-up__up').addClass('header-up__up--open');
    });

    $('.header-up__up-close').click(function () {
      $('.header-up__up').removeClass('header-up__up--open');
      $('html').removeClass('hiden');
    });

    $('#katalog').click(function () {
      $('html').addClass('hiden');
      $('.header-down').addClass('header-down--open');;
    });

    $('.header-down__close').click(function () {
      $('html').removeClass('hiden');
      $('.header-down').removeClass('header-down--open');;
    });

    $('.nav__item').hover(function () {
      $(this).find('.nav-drop-down').slideToggle();
      $(this).toggleClass('nav__item--open');
    });

    $('#searcBtn').click(function () {
      $(this).toggleClass('search-close');
      $('.search-line').slideToggle();
    });
  }



  $('.heart-wrap').click(function () {
    $(this).find('.heart-wrap__svg').toggleClass('heart-wrap__svg--active');
    return false;
  });

  $('.btn-categories').click(function () {
    $(this).toggleClass('btn-categories--open');
    $(this).closest('.sidebar').find('.categories').slideToggle();
  });

  $('.filter-row-mob').click(function () {
    $(this).toggleClass('filter-row-mob--open');
    $(this).closest('.filter-goods__sect').find('.filter-goods__container').slideToggle();
  });


  $('.collor-item').click(function () {
    $('.collor-item').removeClass('collor-item--active');
    $(this).addClass('collor-item--active');
  });

  $('.number-of-modules__item').click(function () {
    $('.number-of-modules__item').removeClass('number-of-modules__item--active');
    $(this).addClass('number-of-modules__item--active');
  });

  $('.categories__row').click(function () {
    $(this).closest('.categories__item').toggleClass('categories__item--active');
    $(this).closest('.categories__item').find('.categories-dropdown').slideToggle();
  });

  $('.tegs__item').click(function () {
    $('.tegs__item').removeClass('tegs__item--active');
    $(this).addClass('tegs__item--active');
  })

  $('.picture-block-catalog').mouseenter(function (cycleEffects) {
    $(this).css({
      zIndex: "10"
    });
    $('.picture-block-catalog').removeClass('picture-block-catalog--mouse-hover');
    $(this).addClass('picture-block-catalog--mouse-hover');
    $(this).find('.picture-block-dropdown').animate({
      bottom: -46,
    }, 'fast');
  });

  $('.picture-block-catalog').mouseleave(function (cycleEffects) {
    $(this).find('.picture-block-dropdown').animate({
      bottom: 0,
    }, 'fast', function () {
      $(this).closest('.picture-block-catalog').removeClass('picture-block-catalog--mouse-hover');
      $(this).closest('.picture-block-catalog').css({
        zIndex: "2"
      });
    });

  });

  // поле счетчик
  $('.quantity__plus').click(function () {
    var number = $(this).closest('.quantity').find('.quantity__number');
    number.val(parseInt(number.val()) + 1);
    number.change();
    var numberConfigurate = $(this).closest('.quantity').find('.quantity__number').val();
    if (numberConfigurate > 0) {
      $(this).closest('.quantity').addClass('quantity--active');
    }
    return false;
  });

  $('.quantity__minus').click(function () {
    var number = $(this).closest('.quantity').find('.quantity__number');
    var count = parseInt(number.val()) - 1;
    count = count < 1 ? 0 : count;
    number.val(count);
    number.change();
    var numberConfigurate = $(this).closest('.quantity').find('.quantity__number').val();
    if (numberConfigurate == 0) {
      $(this).closest('.quantity').removeClass('quantity--active');
    }
    return false;
  });

  // поле счетчик - конец


  $('.setings-dropdown__row').click(function () {
    $(this).closest('.setings-dropdown').find('.setings-dropdown__wrap').slideToggle();
    $(this).toggleClass('setings-dropdown__row--active');
  });


  //  $(".slider-size__wrap").slider();
  $(".slider-size__wrap").slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
  });

  $('.type-module').click(function () {
    $('.type-module').removeClass('type-module--active');
    $(this).addClass('type-module--active');
  });


  $('.change-block__wrap-img').click(function () {
    $(this).closest('.setings-flex__wrapper').find('.change-block').removeClass('change-block--active');
    $(this).closest('.change-block').addClass('change-block--active');
  });

  $('.picture-tab-items__wrap').click(function () {
    $('.picture-tab-items__wrap').removeClass('picture-tab-items__wrap--active');
    $(this).addClass('picture-tab-items__wrap--active');
    $('.tabs-picture-content__content').removeClass('tabs-picture-content__content--open');
    $('.tabs-picture-content__content').hide();
    var moduleId = $('#' + $(this).attr('rel'));
    $(moduleId).show();
  });

  $('.select-custom__row').click(function () {
    $(this).toggleClass('select-custom__row--open');
    $(this).closest('.select-custom').find('.select-custom__list').toggle();
  });

  //  $('.select-custom__row').click(function () {
  //    if (!$('.select-custom__row').hasClass('select-custom__row--open')) {
  //      $(this).queue(function () {
  //        $(this).addClass('select-custom__row--open');
  //        $(this).closest('.select-custom').find('.select-custom__list').slideDown();
  //      })
  //    } else {
  //      $(this).queue(function () {
  //        $(this).closest('.select-custom').find('.select-custom__list').slideDown();
  //        $(this).addClass('select-custom__row--open');
  //      })
  //    }
  //
  //  });



  $(document).mouseup(function (e) { // событие клика по веб-документу
    var customSelect = $(".select-custom"); // тут указываем ID элемента
    if (!customSelect.is(e.target) // если клик был не по нашему блоку
      &&
      customSelect.has(e.target).length === 0) { // и не по его дочерним элементам
      customSelect.find('.select-custom__list').hide();
      customSelect.find('.select-custom__row').removeClass('select-custom__row--open');
    }
  });

  $('input[type="tel"]').mask('+7 (000) 000-00-00', {
    placeholder: "+7 (___) ___-__-__"
  });
//  $('.fallback').mask("00r00r0000", {
//    translation: {
//      'r': {
//        pattern: /[\/]/,
//        fallback: '/'
//      },
//      placeholder: "__/__/____"
//    }
//  });



  //  //select
  //  $(".filter__select").selectmenu();
  //  $(".sorting__select").selectmenu();

  //Модалка
  // в отделтный фаил
  $('.show_popup').click(function () {
    var popup_id = $('#' + $(this).attr('rel'));
    $(popup_id).show();
    $(popup_id).find('.my-modal').addClass('modal-open');
    $('html').addClass('hiden');
  })
  $('.close-popup').click(function () {
    $(this).closest(".my-modal").removeClass('modal-open');
    $(this).closest(".modal-container").hide();
    $('html').removeClass('hiden');
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var modalOpen = $(".modal-open"); // тут указываем ID элемента
    if (!modalOpen.is(e.target) // если клик был не по нашему блоку
      &&
      modalOpen.has(e.target).length === 0) { // и не по его дочерним элементам
      modalOpen.closest('.modal-container').hide();
      $('html').removeClass('hiden');
    }
  });


  var swiper = new Swiper('#picture-slider1 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider1 .picture-slider__arrow--next',
      prevEl: '#picture-slider1 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#picture-slider2 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider2 .picture-slider__arrow--next',
      prevEl: '#picture-slider2 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#picture-slider3 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider3 .picture-slider__arrow--next',
      prevEl: '#picture-slider3 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#picture-slider4 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider4 .picture-slider__arrow--next',
      prevEl: '#picture-slider4 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#picture-slider5 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider5 .picture-slider__arrow--next',
      prevEl: '#picture-slider5 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#picture-slider6 .picture-slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '#picture-slider6 .picture-slider__arrow--next',
      prevEl: '#picture-slider6 .picture-slider__arrow--prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  $('.reviews-tab-items__wrap').click(function () {
    $(this).closest('.reviews').find('.reviews-tab-content').hide();
    $('.reviews-tab-items__wrap').removeClass('reviews-tab-items__wrap--active');
    $(this).addClass('reviews-tab-items__wrap--active');
    var idTab = $('#' + $(this).attr('rel'));
    $(idTab).show();
  });

  var swiper = new Swiper('#reviews1 .reviews-slider__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true,
    navigation: {
      nextEl: '#reviews1 .reviews-slider__arrow--next',
      prevEl: '#reviews1 .reviews-slider__arrow--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#reviews2 .reviews-slider__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true,
    navigation: {
      nextEl: '#reviews2 .reviews-slider__arrow--next',
      prevEl: '#reviews2 .reviews-slider__arrow--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('#reviews3 .reviews-slider__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true,
    navigation: {
      nextEl: '#reviews3 .reviews-slider__arrow--next',
      prevEl: '#reviews3 .reviews-slider__arrow--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var galleryThumbs = new Swiper('#module-picture .picture-slider-down__slider', {
    spaceBetween: 16,
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.picture-slider-down__arrow--next',
      prevEl: '.picture-slider-down__arrow--prev',
    },
    breakpoints: {
      1120: {
        slidesPerView: 'auto',
      },
      575: {
        slidesPerView: 'auto',
        spaceBetween: 8,
      },
    }
  });
  var galleryTop = new Swiper(' #module-picture .picture-slider-big__slider', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    simulateTouch: false,
    shortSwipes: false,
    navigation: {
      nextEl: '.picture-slider-big__arrow--next',
      prevEl: '.picture-slider-big__arrow--prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  var galleryThumbs = new Swiper('#poster-picture .picture-slider-down__slider', {
    spaceBetween: 16,
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.picture-slider-down__arrow--next',
      prevEl: '.picture-slider-down__arrow--prev',
    },
    breakpoints: {
      1120: {
        slidesPerView: 'auto',
      }
    }
  });
  var galleryTop = new Swiper(' #poster-picture .picture-slider-big__slider', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    simulateTouch: false,
    shortSwipes: false,
    navigation: {
      nextEl: '.picture-slider-big__arrow--next',
      prevEl: '.picture-slider-big__arrow--prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });


  var galleryThumbs = new Swiper('#baguette-picture .picture-slider-down__slider', {
    spaceBetween: 16,
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.picture-slider-down__arrow--next',
      prevEl: '.picture-slider-down__arrow--prev',
    },
    breakpoints: {
      1120: {
        slidesPerView: 'auto',
      }
    }
  });
  var galleryTop = new Swiper(' #baguette-picture .picture-slider-big__slider', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    simulateTouch: false,
    shortSwipes: false,
    navigation: {
      nextEl: '.picture-slider-big__arrow--next',
      prevEl: '.picture-slider-big__arrow--prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });


  var swiper = new Swiper('.baguette-slider__container', {
    slidesPerView: 5,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    //    loop: true,
    navigation: {
      nextEl: '.baguette-slider__arrow--next',
      prevEl: '.baguette-slider__arrow--prev',
    },
    breakpoints: {
      1120: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      }
    }
  });


  $('.picture-slider-down__slide.swiper-slide-active').addClass('picture-slider-down__slide--active');

  $('.picture-slider-down__slide').click(function () {
    $('.picture-slider-down__slide').removeClass('picture-slider-down__slide--active');
    $('.swiper-slide-thumb-active').addClass('picture-slider-down__slide--active');
  });

  $('.picture-slider-big__arrow').click(function () {
    $('.picture-slider-down__slide').removeClass('picture-slider-down__slide--active');
    $('.swiper-slide-thumb-active').addClass('picture-slider-down__slide--active');
  });


});

//(function () {
//  var imgSocial = $('.reviews-banner__img-animate'),
//    startX = 0,
//    startY = 0,
//    w = document.documentElement.offsetWidth,
//    h = document.documentElement.offsetHeight;
//
//  imgSocial.mousemove(function (evt) {
//    var posX = Math.round(evt.clientX / w * startX)
//    var posY = Math.round(evt.clientY / h * startY)
//    imgSocial.style.backgroundPosition = posX + 'px ' + posY + 'px'
//  })
//})()
