(function() {

    const slides = [
        /*'<div><img src="img/dinner-food.jpeg" alt="Dinner"></div>',
        '<div><img src="img/breakfast-food.jpg" alt="Breakfast"></div>',
        '<div><img src="img/lunch-food.jpg" alt="Lunch"></div>',
        '<div><img src="img/treats-food.jpg" alt="Treats"></div>'*/
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

    setInterval(renderSlide, 1000);

})();