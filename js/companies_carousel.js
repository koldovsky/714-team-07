(function () {
  const slides = [
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_airtel.png" alt="Airtel" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_argo.png" alt="Argo" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_bobo_coworking.png" alt="Bobo" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_bone.png" alt="Bone" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_didi_insider.png" alt="DiDi" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_ideas_first.png" alt="Ideas First" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_just_in_time.png" alt="Just In Time" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_paragon.png" alt="Paragon" /></div>`,
    `<div class="slide-container__logo_div"><img class="logo_div__img" src="img/subscribe_section/small/slider_southern_company.png" alt="Southern Company" /></div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      '.container__companies_carousel .companies_carousel__slide-container'
    );

    slideContainer.innerHTML = slides[slideIdx];

    // Responsive:
    if (window.innerWidth >= 480) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
    }

    if (window.innerWidth >= 768) {
      // const thirdSlideIdx = slideIdx + 2 >= slides.length ? 0 : slideIdx + 2;

      let thirdSlideIdx;
      if (slideIdx === 7) {
        thirdSlideIdx = 0;
      } else if (slideIdx === 8) {
        thirdSlideIdx = 1;
      } else {
        thirdSlideIdx = slideIdx + 2;
      }

      slideContainer.innerHTML += slides[thirdSlideIdx];

      // const fourthSlideIdx = slideIdx + 3 >= slides.length ? 0 : slideIdx + 3;

      let fourthSlideIdx;
      if (slideIdx === 6) {
        fourthSlideIdx = 0;
      } else if (slideIdx === 7) {
        fourthSlideIdx = 1;
      } else if (slideIdx === 8) {
        fourthSlideIdx = 2;
      } else {
        fourthSlideIdx = slideIdx + 3;
      }

      slideContainer.innerHTML += slides[fourthSlideIdx];
    }

    if (window.innerWidth >= 992) {
      // const fifthSlideIdx =
      //   slideIdx + 4 >= slideContainer.length ? 3 : slideIdx + 4;

      let fifthSlideIdx;
      if (slideIdx === 5) {
        fifthSlideIdx = 0;
      } else if (slideIdx === 6) {
        fifthSlideIdx = 1;
      } else if (slideIdx === 7) {
        fifthSlideIdx = 2;
      } else if (slideIdx === 8) {
        fifthSlideIdx = 3;
      } else {
        fifthSlideIdx = slideIdx + 4;
      }

      slideContainer.innerHTML += slides[fifthSlideIdx];

      // const sixthSlideIdx =
      //   slideIdx + 5 >= slideContainer.length ? 3 : slideIdx + 5;

      let sixthSlideIdx;
      if (slideIdx === 4) {
        sixthSlideIdx = 0;
      } else if (slideIdx === 5) {
        sixthSlideIdx = 1;
      } else if (slideIdx === 6) {
        sixthSlideIdx = 2;
      } else if (slideIdx === 7) {
        sixthSlideIdx = 3;
      } else if (slideIdx === 8) {
        sixthSlideIdx = 4;
      } else {
        sixthSlideIdx = slideIdx + 5;
      }

      slideContainer.innerHTML += slides[sixthSlideIdx];

      // const seventhSlideIdx =
      //   slideIdx + 6 >= slideContainer.length ? 3 : slideIdx + 6;

      let seventhSlideIdx;
      if (slideIdx === 3) {
        seventhSlideIdx = 0;
      } else if (slideIdx === 4) {
        seventhSlideIdx = 1;
      } else if (slideIdx === 5) {
        seventhSlideIdx = 2;
      } else if (slideIdx === 6) {
        seventhSlideIdx = 3;
      } else if (slideIdx === 7) {
        seventhSlideIdx = 4;
      } else if (slideIdx === 8) {
        seventhSlideIdx = 5;
      } else {
        seventhSlideIdx = slideIdx + 6;
      }

      slideContainer.innerHTML += slides[seventhSlideIdx];
    }
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
  }

  // setInterval(nextSlide, 4000);
  showCurrentSlide();

  const nextButton = document.querySelector(
    '.container__companies_carousel > .companies-btn-next'
  );
  // Додаю обробник подій addEventListener('назва події', назва_функції):
  nextButton.addEventListener('click', nextSlide);

  const prevButton = document.querySelector(
    '.container__companies_carousel > .companies-btn-prev'
  );
  prevButton.addEventListener('click', prevSlide);

  // Обробник на зміну вікна браузера:
  window.addEventListener('resize', showCurrentSlide);
})();
