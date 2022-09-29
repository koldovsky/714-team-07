

/*let btn_prev = document.querySelector('#testimonials__roller .carousel-buton .prev');
let images = document.querySelectorAll('#testimonials__roller .test-carousel-photos .testimonials__person');
let btn_next = document.querySelector('#testimonials__roller .carousel-buton .next');

let i = 0;
images[i].style.display = 'none';
i++;
if (i >= images.length) {
    i = 0;
}
btn_prev.onclick = function () {
    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
} */

const images = document.querySelectorAll('#testimonials__roller .test-carousel-photos .testimonials__person');
const line = document.querySelector('.test-carousel-photos');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('#testimonials__roller').offsetWidth;
    line.style.width = width * images.length + "px";
    images.forEach(item => {
        item.style.width = width + "px";
        item.style.height = 'auto';
    });
    roll();
}

window.addEventListener('resize', init);
init();

document.querySelector('.testim_next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    roll();
});

document.querySelector('.testim_prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    roll();
});

function roll() {
    line.style.transform = 'translate(-' + count * width + 'px)';
}







