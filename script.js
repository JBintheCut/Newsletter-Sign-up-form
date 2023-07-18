const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe');
const emailName = document.getElementById('input-email');
const dismissButton = document.getElementById('dismiss');
const updateContainer = document.getElementById('container');
const successContainer = document.getElementById('success');
const validityAlert = document.getElementById('alert-state')

subscribeButton.addEventListener('click', () => {

    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        validityAlert.classList.add('active')
        emailInput.classList.add('active')
    } else {
        validateEmail()
    emailName.innerHTML = emailInput.value
    validityAlert.classList.remove('active')
        emailInput.classList.remove('active')
    }
})

dismissButton.addEventListener('click', () => {
    returnFunction()
})

function validateEmail() {
    updateContainer.classList.add('active')
    successContainer.classList.add('active')
}

function returnFunction() {
    updateContainer.classList.remove('active')
    successContainer.classList.remove('active')
}
