function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtnEl = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');
changeBtnEl.addEventListener('click', event => {
  const newColor = document.body.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = newColor;
});
