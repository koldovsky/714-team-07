(function () {
    const divs = document.querySelectorAll('.achievement__count');

    for (const div of divs) {
        setInterval(() => {
            let count = div.innerHTML;
            count++;
            div.innerHTML = count;
        }, 5000);   
    }
})();