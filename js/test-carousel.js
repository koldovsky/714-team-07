const images = document.querySelectorAll(
  '#testimonials__roller .test-carousel-photos .testimonials__person'
);
const line = document.querySelector('.test-carousel-photos');
let count = 0;
let width;

function init() {
  width = document.querySelector('#testimonials__roller').offsetWidth;
  line.style.width = width * images.length + 'px';
  images.forEach((item) => {
    item.style.width = width + 'px';
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

