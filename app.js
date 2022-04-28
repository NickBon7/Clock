setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  // for the animation
  let hour = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  hour.style.strokeDashoffset = 440 - (440 * h) / 24;
  min.style.strokeDashoffset = 440 - (440 * m) / 60;
  sec.style.strokeDashoffset = 440 - (440 * s) / 60;
});
