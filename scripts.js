const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const fname = form.querySelector(".fname");
    const lname = form.querySelector(".lname");
    const emailField = form.querySelector(".email");
    const password = form.querySelector(".password");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;

    if (!fname.value.trim()) {
        showError(fname, 'First Name cannot be empty', '.fname-error');
    }
    
    if (!lname.value.trim()) {
        showError(lname, 'Last Name cannot be empty', '.lname-error');
    }
    
    if (!password.value.trim()) {
        showError(password, 'Password cannot be empty', '.password-error');
    } else if (!passwordPattern.test(password.value)) {
        showError(password, 'Password must have at least 8 characters and 1 special character', '.password-error');
    }
    
    if (!emailField.value.trim()) {
        showError(emailField, 'Email cannot be empty', '.email-error');
    } else if (!emailPattern.test(emailField.value)) {
        showError(emailField, 'Looks like this is not a valid email', '.email-error');
    }
});

function showError(inputField, message, errorClass) {
    inputField.classList.add('invalid');
    const errorElement = document.querySelector(errorClass);
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible'; 
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.style.visibility = 'hidden');
    document.querySelectorAll('input.invalid').forEach(input => input.classList.remove('invalid'));
}