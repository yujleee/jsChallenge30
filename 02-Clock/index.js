const hand = document.querySelector('.hand');
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('.digital');
const DEFAULT_DEGREE = 90;

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + DEFAULT_DEGREE;
  const minutesDegrees = (minutes / 60) * 360 + DEFAULT_DEGREE;
  const hoursDegrees = (hours / 12) * 360 + DEFAULT_DEGREE;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transitionDuration = '0s';
  }

  if (minutes === 0) {
    minHand.style.transitionDuration = '0s';
  }

  if (hours === 0) {
    hourHand.style.transitionDuration = '0s';
  }

  digital.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

setInterval(setDate, 1000);

setDate();
