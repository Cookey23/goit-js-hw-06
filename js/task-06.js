const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', changeClass);
function changeClass() {
    textInput.classList.add('invalid')
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.replace('invalid', 'valid')
    }
}
 