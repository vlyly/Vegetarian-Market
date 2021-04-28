const time_sale_count_timer1 = document.getElementById(
  "time_sale_count_timer1"
);
const time_sale_count_timer2 = document.getElementById(
  "time_sale_count_timer2"
);

function countDown() {
  var now = new Date();
  var tommorw = new Date(now.getTime() + 86400000);
  var calculated = (tommorw.setHours(0, 0, 0, 0) - now) / 1000;
  var hours = Math.floor(calculated / 3600);
  var minutes = Math.floor((calculated / 60) % 60);
  var seconds = Math.floor(calculated % 60);

  hours = numberFormat(hours);
  minutes = numberFormat(minutes);
  seconds = numberFormat(seconds);

  time_sale_count_timer1.textContent = `${hours}:${minutes}:${seconds}`;
  time_sale_count_timer2.textContent = `${hours}:${minutes}:${seconds}`;
}

function numberFormat(time) {
  time < 10 ? (time = `0${time}`) : time;
  return time;
}

setInterval(countDown, 1000);
