const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', checkInput);
function checkInput(event) {
    if (nameInput.value === '') {
        nameOutput.textContent = "Anonymous"
    }
    nameOutput.textContent = nameInput.value;
}
