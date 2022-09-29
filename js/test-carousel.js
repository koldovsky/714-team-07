// const images = document.querySelectorAll('#testimonials__roller .test-carousel-photos .testimonials__person');
// const line = document.querySelector('.test-carousel-photos');
// let count = 0;
// let width;

// function init() {
//     console.log('resize');
//     width = document.querySelector('#testimonials__roller').offsetWidth;
//     line.style.width = width * images.length + "px";
//     images.forEach(item => {
//         item.style.width = width + "px";
//         item.style.height = 'auto';
//     });
//     roll();
// }

// window.addEventListener('resize', init);
// init();

// document.querySelector('.testim_next').addEventListener('click', function () {
//     count++;
//     if (count >= images.length) {
//         count = 0;
//     }
//     roll();
// });

// document.querySelector('.testim_prev').addEventListener('click', function () {
//     count--;
//     if (count < 0) {
//         count = images.length - 1;
//     }
//     roll();
// });

// function roll() {
//     line.style.transform = 'translate(-' + count * width + 'px)';
// }


(function(){
    const slides = document.querySelectorAll('#testimonials__roller .test-carousel-photos .testimonials__person');
let curentSlide = 0;

const slideContainer = document.querySelector('#testimonials__roller .test-carousel-photos .testimonials__person');

function renderSlide() {
    slideContainer.innerHTML = slides[curentSlide];
    if(window.innerWidth > 600){
        const secondSlide = curentSlide + 1 >= slides.length ? 0 :curentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if(window.innerWidth > 900) {
        const thirdSlide =  secondSlide + 1 >= slides.length ? 0 :secondSlide + 1;
        slideContainer.innerHTML += slides[thirdSlide];
        
        }
    }
}
function nextSlide() {
    curentSlide = curentSlide + 1 >= slides.length ? 0 : curentSlide + 1;
renderSlide();
}
function prevSlide() {
    curentSlide = curentSlide - 1 < 0 ? slides.length -1 : curentSlide -1;
renderSlide();
}

renderSlide();
setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.testim_next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.testim_prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
})();




