(function() {

  const slides = [
    '<div class="image-adaptivity-container"><img class="image-specialties" src="img/dinner-food.jpeg" alt="Dinner">' +
    '<p class="name-specialties">Dinner</p></div>',
    '<div class="image-adaptivity-container"><img class="image-specialties" src="img/breakfast-food.jpg" alt="Breakfast">' +
    '<p class="name-specialties">Breakfast</p></div>',
    '<div class="image-adaptivity-container"><img class="image-specialties" src="img/lunch-food.jpg" alt="Lunch">' +
    '<p class="name-specialties">Lunch</p></div>',
    '<div class="image-adaptivity-container"><img class="image-specialties" src="img/treats-food.jpg" alt="Treats">' +
    '<p class="name-specialties">Treats</p></div>'
  ];

  let currentSlideIdx = 0;

  const slideContainer = document.querySelector('.specialtiesProductsCarousel .specialtiesCarouselSlides');

  function renderSlide() {
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 500) {
      const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 800) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
        if (window.innerWidth > 991) {
          const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[fourthSlideIdx];
        }
      }
    }
  }

  function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }

  function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }

  renderSlide();

  setInterval(nextSlide, 6000);

  const btnNext = document.querySelector('.specialtiesProductsCarousel .specialtiesBtnNext ');
  btnNext.addEventListener('click', nextSlide);

  const btnPrev = document.querySelector('.specialtiesProductsCarousel .specialtiesBtnPrev ');
  btnPrev.addEventListener('click', prevSlide);

  window.addEventListener('resize', renderSlide)

})();