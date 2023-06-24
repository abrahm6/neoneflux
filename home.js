function countdownTimer() {
    var countdownElement = document.getElementById("countdown");
    var remainingTime = 100 * 3600; // Start at 100 hours
    var countdownDuration = 10000; // Total duration in milliseconds (10 seconds)
    var startTime = Date.now();

    var countdown = setInterval(function() {
      var elapsedTime = Date.now() - startTime;
      var progress = elapsedTime / countdownDuration;

      if (elapsedTime >= countdownDuration) {
        clearInterval(countdown);
        remainingTime = 0;
        window.location.href = "mainpage.html"; // Redirect to mainpage.html
      } else {
        remainingTime = Math.max(100 * 3600 - Math.floor(progress * 100 * 3600), 0);
      }

      var hours = Math.floor(remainingTime / 3600);
      var minutes = Math.floor((remainingTime % 3600) / 60);
      var seconds = remainingTime % 60;

      countdownElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }, 10);

    function padZero(value) {
      return value.toString().padStart(2, "0");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    countdownTimer();
  });