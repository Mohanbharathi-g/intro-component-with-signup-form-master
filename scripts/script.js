// creating elements
const firstNameEl = document.getElementById('firstname');
const secondNameEl = document.getElementById('lastname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

const btnSubmit = document.getElementById('btn-submit');

const errorMsgEl = document.querySelectorAll('.error-msg');

// global varibales

// console.log(errorMsgEl);

// functions
function init() {
  errorMsgEl[0].classList.add('hidden');
  errorMsgEl[1].classList.add('hidden');
  errorMsgEl[2].classList.add('hidden');
  errorMsgEl[3].classList.add('hidden');
}

function validation() {
  const regaxEl = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  let firstName = firstNameEl.value;
  console.log(firstName);

  let secondName = secondNameEl.value;
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log(secondName);
  console.log(email);
  console.log(password);

  if (firstName === '') {
    errorMsgEl[0].classList.remove('hidden');
    errorMsgEl[0].classList.add('show');
    firstNameEl.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    errorMsgEl[0].classList.remove('show');
    errorMsgEl[0].classList.add('hidden');
  }
  if (secondName === '') {
    errorMsgEl[1].classList.remove('hidden');
    errorMsgEl[1].classList.add('show');
    secondNameEl.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    errorMsgEl[1].classList.remove('show');
    errorMsgEl[1].classList.add('hidden');
  }

  if (email.match(regaxEl)) {
    errorMsgEl[2].classList.remove('show');
    errorMsgEl[2].classList.add('hidden');
  } else {
    errorMsgEl[2].classList.remove('hidden');
    errorMsgEl[2].classList.add('show');
    emailEl.style.border = '2px solid hsl(0, 100%, 74%)';
  }

  if (password === '') {
    errorMsgEl[3].classList.remove('hidden');
    errorMsgEl[3].classList.add('show');
    passwordEl.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    errorMsgEl[3].classList.remove('show');
    errorMsgEl[3].classList.add('hidden');
  }
}

// eventlistener

btnSubmit.addEventListener('click', function () {
  console.log(`hiii`);
  validation();
});

firstNameEl.addEventListener('click', function () {
  firstNameEl.style.border = '2px solid hsl(154, 59%, 51%)';
  errorMsgEl[0].classList.remove('show');
  errorMsgEl[0].classList.add('hidden');
});

secondNameEl.addEventListener('click', function () {
  secondNameEl.style.border = '2px solid hsl(154, 59%, 51%)';
  errorMsgEl[1].classList.remove('show');
  errorMsgEl[1].classList.add('hidden');
});

emailEl.addEventListener('click', function () {
  emailEl.style.border = '2px solid hsl(154, 59%, 51%)';
  errorMsgEl[2].classList.remove('show');
  errorMsgEl[2].classList.add('hidden');
});

passwordEl.addEventListener('click', function () {
  passwordEl.style.border = '2px solid hsl(154, 59%, 51%)';
  errorMsgEl[3].classList.remove('show');
  errorMsgEl[3].classList.add('hidden');
});
