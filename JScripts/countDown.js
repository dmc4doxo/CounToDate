// Practice from https://www.youtube.com/watch?v=dtKciwk_si4&t=2058s
// June 2022
//

const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const targetDate = "1 january 2023";
function countDown() {
  const currentTime = new Date();
  const milliSecondToDate = new Date(targetDate) - new Date();
  const secondToDate = milliSecondToDate / 1000;
  const days = Math.floor(secondToDate / 3600 / 24);
  const hours = Math.floor(secondToDate / 3600) % 24;
  const minutes = Math.floor(secondToDate / 60) % 60;
  const seconds = Math.floor(secondToDate % 60);

  // console.log(milliSecondToDate);
  // console.log(days);

  daysE1.innerHTML = days;
  hoursE1.innerHTML = hours;
  minutesE1.innerHTML = minutes;
  secondsE1.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);
