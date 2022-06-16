const controlHue = document.querySelector('#hue');
const colorValue = document.querySelector('.color-value');
const controlSize = document.querySelector('#size');
const sizeValue = document.querySelector('.size-value');
const clearButton = document.querySelector('.clear-button');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BABD55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  //   hue++;
  //   if (hue >= 360) {
  //     hue = 0;
  //   }

  //   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //     direction = !direction;
  //   }
  //   direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

// TODO :: 색상 컨트롤 바 만들기
function changeColor() {
  const currentHue = controlHue.value;
  hue = currentHue;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  colorValue.innerHTML = `${currentHue}`;
}

// TODO :: 굵기 조절 컨트롤 바 만들기
function changeSize() {
  const currentSize = controlSize.value;
  ctx.lineWidth = currentSize;

  sizeValue.innerHTML = `${currentSize}`;
}

// TODO :: 지우기
function clearAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

controlHue.addEventListener('change', changeColor);
controlSize.addEventListener('change', changeSize);
clearButton.addEventListener('click', clearAll);
