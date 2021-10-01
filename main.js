/*
* ----------------
* Importing styles
* ----------------
*/

import './assets/sass/app.scss'

/*
* --------------------
* Your javascript here
* --------------------
*/

// FUNCTIONS : BTN ON CLICK
function btnOnclickparticulier() {
  const button = document.querySelectorAll('.btn-particulier');
  

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.nameparticulier').style.display = "block";
      document.querySelector('.nameprofessionnel').style.display = "none";
      document.querySelector('.namevigneron').style.display = "none";
      document.querySelector('.section__particulier').classList.add("on");
      document.querySelector('.section__professionnel').classList.remove("on");
      document.querySelector('.section__vigneron').classList.remove("on");
    });
  });
}

function btnOnclickprofessionnel() {
  const button = document.querySelectorAll('.btn-professionnel');
 

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      //Appartion du titre
      document.querySelector('.nameprofessionnel').style.display = "block";
      document.querySelector('.nameparticulier').style.display = "none";
      document.querySelector('.namevigneron').style.display = "none";
      //Changement d'état de l'onglet
      document.querySelector('.section__particulier').classList.remove("on");
      document.querySelector('.section__professionnel').classList.add("on");
      document.querySelector('.section__vigneron').classList.remove("on");
    });
  });
}

function btnOnclickvigneron() {
  const button = document.querySelectorAll('.btn-vigneron');
  

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.namevigneron').style.display = "block";
      document.querySelector('.nameprofessionnel').style.display = "none";
      document.querySelector('.nameparticulier').style.display = "none";
      document.querySelector('.section__particulier').classList.remove("on");
      document.querySelector('.section__professionnel').classList.remove("on");
      document.querySelector('.section__vigneron').classList.add("on");
      //elt.closest('.namevigneron').style.display = 'none';
    });
  });
}

// FUNCTION : FORM VALIDATE PARTICULIER, PROFESSIONNEL et VIGNERON
var formValidation = (input) => {
  let _this = this;
  this.myForm.addEventListener('keyup', event => {
    event.preventDefault();
 
    document.querySelector('#signin-email').removeAttribute('style');
    document.querySelector('#signin-password').removeAttribute('style');
 
    if (_this.champValid.test(document.querySelector('#signin-email').value) === false) {
      return document.querySelector('#signin-email').style.backgroundColor = '#fba';
    }
 
    if (_this.champValid.test(document.querySelector('#signin-password').value) === false) {
      return document.querySelector('#signin-password').style.backgroundColor = '#fba';
    }
     
    // Le formulaire est valide
  });
}

//let signin_form = document.querySelector('.form__login')
let signin_form = document.forms[0];
let signin_form_pro = document.forms[1];
let signin_form_vig = document.forms[2];

let signin_btn = document.querySelector('#signin-btn')
let signin_btn_pro = document.querySelector('#signin-btn-pro')
let signin_btn_vig = document.querySelector('#signin-btn-vig')

var validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase())
}

var checkSigninInput = (input) => {
    let err_span = signin_form.querySelector(`span[data-err-for="${input.id}"]`)
    let val = input.value.trim()
    let form_group = input.parentElement

    switch(input.getAttribute('type')) {
        case 'password':
            if (val.length < 6) {
                form_group.classList.add('err')
                form_group.classList.remove('success')
                err_span.innerHTML = 'Le mot de passe doit contenir au moins de 6 caractères'
            } else {
                form_group.classList.add('success')
                form_group.classList.remove('err')
                err_span.innerHTML = ''
            }
            break;
        case 'email':
            if (val.length === 0 || !validateEmail(val)) {
                form_group.classList.add('err')
                form_group.classList.remove('success')
                err_span.innerHTML = 'Saisissez un e-mail valide pour votre compte Particulier. '
            } else {
                form_group.classList.add('success')
                form_group.classList.remove('err')
                err_span.innerHTML = ''
            }
    }
}

var checkSigninInputPro = (input) => {
  let err_span_pro = signin_form_pro.querySelector(`span[data-err-for="${input.id}"]`)
  let val = input.value.trim()
  let form_group = input.parentElement

  switch(input.getAttribute('type')) {
      case 'password':
          if (val.length < 6) {
              form_group.classList.add('err')
              form_group.classList.remove('success')
              err_span_pro.innerHTML = 'Le mot de passe doit contenir au moins de 6 caractères'
          } else {
              form_group.classList.add('success')
              form_group.classList.remove('err')
              err_span_pro.innerHTML = ''
          }
          break;
      case 'email':
          if (val.length === 0 || !validateEmail(val)) {
              form_group.classList.add('err')
              form_group.classList.remove('success')
              err_span_pro.innerHTML = 'Email non valide pour vous connecter à votre compte Professionnel'
          } else {
              form_group.classList.add('success')
              form_group.classList.remove('err')
              err_span_pro.innerHTML = ''
          }
  }
}

var checkSigninInputVig = (input) => {
  let err_span_vig = signin_form_vig.querySelector(`span[data-err-for="${input.id}"]`)
  let val = input.value.trim()
  let form_group = input.parentElement

  switch(input.getAttribute('type')) {
      case 'password':
          if (val.length < 6) {
              form_group.classList.add('err')
              form_group.classList.remove('success')
              err_span_vig.innerHTML = 'Le mot de passe doit contenir au moins de 6 caractères'
          } else {
              form_group.classList.add('success')
              form_group.classList.remove('err')
              err_span_vig.innerHTML = ''
          }
          break;
      case 'email':
          if (val.length === 0 || !validateEmail(val)) {
              form_group.classList.add('err')
              form_group.classList.remove('success')
              err_span_vig.innerHTML = 'Email non valide pour votre compte Vigneron'
          } else {
              form_group.classList.add('success')
              form_group.classList.remove('err')
              err_span_vig.innerHTML = ''
          }
  }
}
var checkSigninForm = () => {
    let inputs = signin_form.querySelectorAll('.form-input')
    inputs.forEach(input => checkSigninInput(input))
}

var checkSigninFormPro = () => {
  let inputs_pro = signin_form_pro.querySelectorAll('.form-input')
  inputs_pro.forEach(input => checkSigninInputPro(input))
}

var checkSigninFormVig = () => {
  let inputs_vig = signin_form_vig.querySelectorAll('.form-input')
  inputs_vig.forEach(input => checkSigninInputVig(input))
}

signin_btn.onclick = () => {
    checkSigninForm()
}
signin_btn_pro.onclick = () => {
  checkSigninFormPro()
}
signin_btn_vig.onclick = () => {
  checkSigninFormVig()
}

let inputs = signin_form.querySelectorAll('.form-input')
let inputs_pro = signin_form_pro.querySelectorAll('.form-input')
let inputs_vig = signin_form_vig.querySelectorAll('.form-input')
inputs.forEach(input => {
    input.addEventListener('focusout', () => {
        checkSigninInput(input)
    })
})
inputs_pro.forEach(input => {
  input.addEventListener('focusout', () => {
      checkSigninInputPro(input)
  })
})
inputs_vig.forEach(input => {
  input.addEventListener('focusout', () => {
      checkSigninInputVig(input)
  })
})

// FUNCTION : INIT
function init() {
  btnOnclickparticulier();
  btnOnclickprofessionnel();
  btnOnclickvigneron();
}

// LISTENER : DOCUMENT LOADED
if( document.readyState !== 'loading' ) {
  init();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
}
