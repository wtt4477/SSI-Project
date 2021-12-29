function bar_progressing() {
  let buttonAction = document.querySelector(".button_red");
  let buttonStop = document.querySelector(".button_pause");
  let barProgress = document.querySelector(".container_bar_progress");

  var interval;
  var width = 1;
  buttonAction.addEventListener("click", function(e) {
    // buttonAction.textContent =
    //   buttonAction.textContent === "STOP" ? "RESUME" : "STOP";
    clearInterval(interval);
    interval = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        width = 1;
        clearInterval(interval);
      } else {
        width++;
        barProgress.style.width = width + "%";
      }
    }
  });

  buttonStop.addEventListener("click", function(e) {
    clearInterval(interval);
  });
}

bar_progressing();
