const panels = document.querySelectorAll('.panel');

function openToggle() {
  this.classList.toggle('open');
}

function activeToggle(e) {
  if (e.propertyName.includes('flex-grow')) {
    this.classList.toggle('is-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', openToggle);
  panel.addEventListener('transitionend', activeToggle);
});
