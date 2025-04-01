function validateForm() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    if (email === "") {
        emailError.innerText = "Please enter your email";
        return;
    } else {
        emailError.innerText = "";
    }

    if (password === "") {
        passwordError.innerText = "Please enter your password";
        return;
    } else {
        passwordError.innerText = "";
    }
}