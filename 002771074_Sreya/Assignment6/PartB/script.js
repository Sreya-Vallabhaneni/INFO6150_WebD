$(document).ready(function () {
  let timer = null;
  let hours = 0,
    minutes = 0,
    seconds = 0;

  function updateTimerLabel() {
    // Format the time values with leading zeros
    const formattedTime =
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + seconds).slice(-2);
    $(".timer-label").text(formattedTime);
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const startTimer = async () => {
    if (timer !== null) return; // Timer already running
    while (true) {
      await sleep(1000);
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
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    timer = null;
  };

  const resetTimer = () => {
    clearInterval(timer);
    timer = null;
    hours = minutes = seconds = 0;
    updateTimerLabel();
  };

  $("#start-btn").click(() => {
    startTimer();
  });

  $("#stop-btn").click(() => {
    stopTimer();
  });

  $("#reset-btn").click(() => {
    resetTimer();
  });
});
