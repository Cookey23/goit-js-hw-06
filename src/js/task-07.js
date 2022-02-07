const inputFontSizeControl = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');
inputFontSizeControl.addEventListener('change', event => changedText.style.fontSize = inputFontSizeControl.value + 'px');