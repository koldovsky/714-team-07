window.addEventListener('load', () => {
    const left = document.querySelector ('.btn-left');
    const right = document.querySelector ('.btn-right');

    const slider = document.querySelector('.carusel_slide');
    const images = document.querySelectorAll('.slide');

    let counter = 0;
    const stepSize = images[0].clientWidth;

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;


    right.addEventListener('click', () => {
        counter >= images.length -1 ? (counter = -1) : null;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;
    });

    left.addEventListener('click', () => {
        if (counter <= 0) counter = images.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px`;
    });

    slider.addEventListener('transitionend', event => {
        console.log(1)
    });
});