(function () {
  const slides = [
    `<div><img src="img/subscribe_section/small/slider_airtel.png" alt="Airtel" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_argo.png" alt="Argo" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_bobo_coworking.png" alt="Bobo" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_bone.png" alt="Bone" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_didi_insider.png" alt="DiDi" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_ideas_first.png" alt="Ideas First" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_just_in_time.png" alt="Just In Time" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_paragon.png" alt="Paragon" /></div>`,
    `<div><img src="img/subscribe_section/small/slider_southern_company.png" alt="Southern Company" /></div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      '.container__companies_carousel .companies_carousel__slide-container'
    );

    slideContainer.innerHTML = slides[slideIdx];

    // Responsive:
    if (window.innerWidth >= 500) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
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

  setInterval(nextSlide, 4000);
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
