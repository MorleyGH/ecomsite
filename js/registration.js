// Moves register/log in forms off screen
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register () {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login () {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

// Password form validation

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

function passValidate() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do no match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = passValidate;
confirmPassword.onkeyup = passValidate;