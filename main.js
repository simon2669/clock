const óra = document.querySelector('.óra');

(function getRealTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (hours < 10) {
    hours = `0${hours}`
  }


  óra.textContent = hours + ':' + minutes + ':' + seconds;
  setTimeout(getRealTime, 500)
})();