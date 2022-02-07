const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
  } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return console.log('Alert!')
    }
    console.log({email:email.value, password:password.value});
    event.currentTarget.reset();
}