const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    // e.preventDefault() // Prevent Submit
    let errors = []

    if(firstname_input) {
        //we are in signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        //login page
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    else { //if no errors, store user data in localStorage
        let userObject = {firstname: firstname_input.value, email: email_input.value, password: password_input.value};
        localStorage.setItem("user", JSON.stringify(userObject));
        
        // let storedUser = JSON.parse(localStorage.getItem("user"));
        // console.log(storedUser);

        // localStorage.setItem("name", "bob");
        // localStorage.getItem("name");
        // localStorage.removeItem("name");
        // localStorage.clear();
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = []
    
    if(firstname === '' || firstname == null) {
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect') //adds class incorrect css
    }
    if(email === '' || email == null) {
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null) {
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8) {
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password !== repeatPassword) {
        errors.push('Password does not match repeated password')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    
    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = []

    if(email === '' || email == null) {
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null) {
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})