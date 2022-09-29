(function(){
    const countDownDate = new Date("November 5, 2022 15:37:25").getTime();
    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("clock-map").innerHTML = days + " days "+ " --> " + hours + "h: "
      + minutes + "m: " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock-map").innerHTML = "Great opening...";
      }
    }, 1000);
    })()