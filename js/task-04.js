let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const value = document.querySelector('#value');
incrementBtn.addEventListener('click', event => 
    value.textContent = counterValue += 1);
decrementBtn.addEventListener('click', event => 
    value.textContent = counterValue -= 1);
