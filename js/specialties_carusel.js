(function() {

    const slides = [
        '<div class="image-adaptivity-container"><img class="image-specialties" src="img/dinner-food.jpeg" alt="Dinner"></div>',
        '<div class="image-adaptivity-container"><img class="image-specialties" src="img/breakfast-food.jpg" alt="Breakfast"></div>',
        '<div class="image-adaptivity-container"><img class="image-specialties" src="img/lunch-food.jpg" alt="Lunch"></div>',
        '<div class="image-adaptivity-container"><img class="image-specialties" src="img/treats-food.jpg" alt="Treats"></div>'
    ];

    let currentSlideIdx = 0;

    const slideContainer = document.querySelector('.specialtiesProductsCarousel .specialtiesCarouselSlides');

    function renderSlide() {
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    renderSlide();

    setInterval(nextSlide, 5000);

})();