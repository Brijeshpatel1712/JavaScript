 function upClock() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let session = "AM";

        if (hours >= 12) {
          session = "PM";
        }

        if (hours === 0) {
          hours = 12;
        } else if (hours > 12) {
          hours -= 12;
        }

        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        document.getElementById("half").textContent = session;
      }

      upClock();
      setInterval(upClock, 1000);