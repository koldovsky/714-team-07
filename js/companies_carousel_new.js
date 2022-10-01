$(document).ready(function () {
  $('.partners-slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          // appendArrows: $('.partners-control-element'),
          // appendDots: $('.partners-control-element'),
        },
      },
    ],
  });
});
