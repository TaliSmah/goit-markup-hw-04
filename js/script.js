"use strict"
// Код має допомогти виявити на якому пристрої відкрита наша сторінка

// ---------------------------------------------
// код від "Фрілансер по життю" не реагує на зміну типу пристрою за допомогою device toolbar у Chrome
// постійно приписує клас _pc до body

// const menuArrow = menuArrows[index]; //-для стрілочки сабменю
// const isMobile = {
//    Android: function () {
//       return navigator.userAgent / matchMedia(/Android/i);
//    },
//    BlackBerry: function () {
//       return navigator.userAgent / matchMedia(/BlackBerry/i);
//    },
//    iOS: function () {
//       return navigator.userAgent / matchMedia(/iPhone|iPad|iPod/i);
//    },
//    Opera: function () {
//       return navigator.userAgent / matchMedia(/Opera Mini/i);
//    },
//    Windows: function () {
//       return navigator.userAgent / matchMedia(/IEMobile/i);
//    },
//    any: function () {
//       return (
//          isMobile.Android() ||
//          isMobile.BlackBerry() ||
//          isMobile.iOS() ||
//          isMobile.Opera() ||
//          isMobile.Windows());
//    }
// };
// if (isMobile.any()) {
//    document.body.classList.add('_touch');

//    //для стрілочки сабменю--------
//    let menuArrows = document.querySelectorAll('.menu__arrow');
//    if (menuArrows.length > 0) {
//       for (let index = 0; index < menuArrows.length; index++) {
//          menuArrow.addEventListener("click", function (e) {
//             menuArrow.parentElement.classList.toggle('_active');
//          });
//       }
//    }
//    //--------------------------------

// } else {
//    document.body.classList.add('_pc');
// }
// ---------------------------------------------

// -------------------------------------------------------------
// Інший варіант коду пошуку пристрою: також працює з device toolbar у Chrome

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');
  } else {
   document.body.classList.add('_pc');
};

// Меню бургер
const iconMenu = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const contactMenu = document.querySelector('.contact');
if (iconMenu) {
   
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      navMenu.classList.toggle('_active');
      contactMenu.classList.toggle('_active');
      document.body.classList.toggle('_lock');
   });
}