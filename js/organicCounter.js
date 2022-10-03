(function () {
    const divs = document.querySelectorAll(".achievement__count");
    function counter() {
      for (const div of divs) {
        let count = div.innerHTML;
        count++;
        div.innerHTML = count;
      }
    }
    setInterval(counter, 5000);
  })();