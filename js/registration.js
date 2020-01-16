// moves register/log in forms off screen
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

// password form validation
// if both password variables don't match, don't allow user to continue

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

// google captcha - if captcha isn't triggered, don't allow form submit
// if the submit button is pressed and the captcha isn't completed,
// don't allow the event for submit to occur

var form = document.getElementById('register');
form.addEventListener("submit", function(event){
    if (grecaptcha.getResponse() === '') {                            
      event.preventDefault();
      alert('Please check the recaptcha');
    }
  }
, false);