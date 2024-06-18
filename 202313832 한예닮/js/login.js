const $inputId = document.getElementById("input-id");
const $inputPw = document.getElementById("input-pw");
const $btnLogin = document.getElementById("btn-login");
const $formLogin = document.getElementById("login-form");
const $btnShowRegister = document.getElementById("btn-show-register");
const $registerForm = document.getElementById("register-form");
const $inputRegEmail = document.getElementById("input-reg-email");
const $inputRegPw = document.getElementById("input-reg-pw");
const $inputRegUsername = document.getElementById("input-reg-username");
const $btnRegister = document.getElementById("btn-register");
const $messageSignup = document.createElement("p");
const $signupPrompt = document.getElementById("signup-prompt");
const $forgetPwMessage = document.querySelector(".message-forgetPw");

let checkId = false;
let checkPw = false;
let checkRegEmail = false;
let checkRegPw = false;
let checkRegUsername = false;

const activateButton = function ($button) {
  $button.style.backgroundColor = "rgb(0, 149, 246)";
  $button.disabled = false;
};

const disabledButton = function ($button) {
  $button.style.backgroundColor = "rgb(0, 149, 246, 0.3)";
  $button.disabled = true;
};

const checkLength = function () {
  if ($inputId.value.length > 0 && $inputPw.value.length > 0) {
    activateButton($btnLogin);
  } else {
    disabledButton($btnLogin);
  }
};

const checkRegLength = function () {
  if ($inputRegEmail.value.length > 0 && $inputRegPw.value.length > 0 && $inputRegUsername.value.length > 0) {
    activateButton($btnRegister);
  } else {
    disabledButton($btnRegister);
  }
};

const idValidation = function () {
  const $emailErrorMessage = document.querySelector(".message-emailError");
  if (!$inputId.value.includes("@")) {
    $emailErrorMessage.style.display = "inline-block";
    checkId = false;
  } else {
    $emailErrorMessage.style.display = "none";
    checkId = true;
  }
};

const pwValidation = function () {
  const $pwErrorMessage = document.querySelector(".message-pwError");
  if ($inputPw.value.length < 5) {
    $pwErrorMessage.style.display = "inline-block";
    checkPw = false;
    disabledButton($btnLogin);
  } else {
    $pwErrorMessage.style.display = "none";
    checkPw = true;
    activateButton($btnLogin);
  }
};

const regEmailValidation = function () {
  checkRegEmail = $inputRegEmail.value.includes("@");
  checkRegLength();
};

const regPwValidation = function () {
  checkRegPw = $inputRegPw.value.length >= 5;
  checkRegLength();
};

const regUsernameValidation = function () {
  checkRegUsername = $inputRegUsername.value.length > 0;
  checkRegLength();
};

const showLoginForm = function () {
  $formLogin.style.display = "block";
  $registerForm.style.display = "none";
  $messageSignup.remove();
  $signupPrompt.style.display = "block";
  $forgetPwMessage.style.display = "block";
};

const showRegisterForm = function () {
  $formLogin.style.display = "none";
  $registerForm.style.display = "block";
  $signupPrompt.style.display = "none";
  $forgetPwMessage.style.display = "none";
  $messageSignup.remove();
};

const submitLogin = function (e) {
  e.preventDefault();
  if (checkId === true && checkPw === true) {
    $inputId.value = "";
    $inputPw.value = "";
    location.href = "./main.html";
  }
};

const submitRegistration = function (e) {
  e.preventDefault();
  if (checkRegEmail === true && checkRegPw === true && checkRegUsername === true) {
    const userData = {
      email: $inputRegEmail.value,
      password: $inputRegPw.value,
      username: $inputRegUsername.value,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    $inputRegEmail.value = "";
    $inputRegPw.value = "";
    $inputRegUsername.value = "";
    
   
    $messageSignup.textContent = "가입이 완료되었습니다!";
    $messageSignup.style.color = "green";
    $registerForm.appendChild($messageSignup);
    setTimeout(() => {
      $messageSignup.remove();
      showLoginForm(); 
    }, 3000);
  }
};

$inputId.addEventListener("keyup", checkLength);
$inputPw.addEventListener("keyup", checkLength);
$inputId.addEventListener("change", idValidation);
$inputPw.addEventListener("change", pwValidation);
$btnLogin.addEventListener("click", submitLogin);

$inputRegEmail.addEventListener("keyup", regEmailValidation);
$inputRegPw.addEventListener("keyup", regPwValidation);
$inputRegUsername.addEventListener("keyup", regUsernameValidation);
$btnRegister.addEventListener("click", submitRegistration);

$btnShowRegister.addEventListener("click", function (e) {
  e.preventDefault();
  showRegisterForm();
});
