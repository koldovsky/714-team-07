AOS.init();
window.addEventListener('scroll', function() {
    var element = document.querySelector('.fruits-subscribe');
    var position = element.getBoundingClientRect();
   
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
       element.style.animationName = 'subscribe-appear';
    }
   });