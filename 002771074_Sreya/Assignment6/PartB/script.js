$(document).ready(function () {
  var timer = null;
  var hours = 0,
    minutes = 0,
    seconds = 0;

  function updateTimerLabel() {
    // Format the time values with leading zeros
    var formattedTime =
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + seconds).slice(-2);
    $(".timer-label").text(formattedTime);
  }

  $("#start-btn").click(function () {
    if (timer !== null) return; // Timer already running
    timer = setInterval(function () {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      updateTimerLabel();
    }, 1000);
  });

  $("#stop-btn").click(function () {
    clearInterval(timer);
    timer = null;
  });

  $("#reset-btn").click(function () {
    clearInterval(timer);
    timer = null;
    hours = minutes = seconds = 0;
    updateTimerLabel();
  });
});
