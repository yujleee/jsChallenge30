const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

// 화살표함수의 this와 function의 this는 차이가 있음!
function handleCheck(e) {
  let between = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        between = !between;
      }

      if (between) checkbox.checked = true;
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
