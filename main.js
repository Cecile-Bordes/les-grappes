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

// FUNCTION : FORM VALIDATE
let signin_form = document.querySelector('.form__login')

let signin_btn = document.querySelector('.form--btn')

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
                err_span.innerHTML = 'Email non valide'
            } else {
                form_group.classList.add('success')
                form_group.classList.remove('err')
                err_span.innerHTML = ''
            }
    }
}

var checkSigninForm = () => {
    let inputs = signin_form.querySelectorAll('.form-input')
    inputs.forEach(input => checkSigninInput(input))
}

signin_btn.onclick = () => {
    checkSigninForm()
}

let inputs = signin_form.querySelectorAll('.form-input')
inputs.forEach(input => {
    input.addEventListener('focusout', () => {
        checkSigninInput(input)
    })
})


// FUNCTION : INIT
function init() {
  btnOnclickparticulier();
  btnOnclickprofessionnel();
  btnOnclickvigneron();
}

// LISTENER : DOCUMENT LOADED
document.addEventListener('DOMContentLoaded', function() {
  init();
});
