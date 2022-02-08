const inputFontSizeControl = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');
inputFontSizeControl.addEventListener('input', event => changedText.style.fontSize = inputFontSizeControl.value + 'px');