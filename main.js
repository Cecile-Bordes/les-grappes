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

// FUNCTION : BTN ON CLICK
function btnOnclickparticulier() {
  const button = document.querySelectorAll('.btn-particulier');
  

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.nameparticulier').style.display = "inline";
      document.querySelector('.nameprofessionnel').style.display = "none";
      document.querySelector('.namevigneron').style.display = "none";
      document.querySelector('.section__particulier').classList.add("on");
      document.querySelector('.section__professionnel').classList.remove("on");
      document.querySelector('.section__vigneron').classList.remove("on");
      //elt.closest('.namevigneron').style.display = 'none';
    });
  });
}

function btnOnclickprofessionnel() {
  const button = document.querySelectorAll('.btn-professionnel');
  

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.nameprofessionnel').style.display = "inline";
      document.querySelector('.nameparticulier').style.display = "none";
      document.querySelector('.namevigneron').style.display = "none";
      document.querySelector('.section__particulier').classList.remove("on");
      document.querySelector('.section__professionnel').classList.add("on");
      document.querySelector('.section__vigneron').classList.remove("on");
      //elt.closest('.namevigneron').style.display = 'none';
    });
  });
}

function btnOnclickvigneron() {
  const button = document.querySelectorAll('.btn-vigneron');
  

  button.forEach(elt => {
    elt.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.namevigneron').style.display = "inline";
      document.querySelector('.nameprofessionnel').style.display = "none";
      document.querySelector('.nameparticulier').style.display = "none";
      document.querySelector('.section__particulier').classList.remove("on");
      document.querySelector('.section__professionnel').classList.remove("on");
      document.querySelector('.section__vigneron').classList.add("on");
      //elt.closest('.namevigneron').style.display = 'none';
    });
  });
}

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
