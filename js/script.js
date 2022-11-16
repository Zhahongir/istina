// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__inner__close'),
    hamburger = document.querySelector('.header__wrap__left__hamburger'),
    bgMenu = document.querySelector('.bg-menu');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        bgMenu.classList.toggle('bg-menu-active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgMenu.classList.toggle('bg-menu-active');
        });
    });
});


// Filter
window.addEventListener('DOMContentLoaded', () => {
    const filter = document.querySelector('.filter'),
    filterItem = document.querySelectorAll('.filter__inner__close'),
    filterBtn = document.querySelector('.products__head__filter'),
    bgMenu = document.querySelector('.bg-menu'),
    bgAll = document.querySelector('.allBg');
  
    filterBtn.addEventListener('click', () => {
        filterBtn.classList.toggle('hamburger_active');
        filter.classList.toggle('filter_active');
        bgMenu.classList.toggle('bg-menu-active');
        bgAll.classList.toggle('bg-all');
    });
  
    filterItem.forEach(item => {
        item.addEventListener('click', () => {
            filterBtn.classList.toggle('hamburger_active');
            filter.classList.toggle('filter_active');
            bgMenu.classList.toggle('bg-menu-active');
            bgAll.classList.toggle('bg-all');
        });
    });
});


// Sort Items
function sortFunction() {
    document.getElementById("sortDropDown").classList.toggle("show__sortDropDown");
}

window.onclick = function(event) {
  if (!event.target.matches('.products__head__sort__inner__title')) {

    var sortDropDowns = document.getElementsByClassName("products__head__sort__wrap");
    var i;
    for (i = 0; i < sortDropDowns.length; i++) {
      var openDropdown = sortDropDowns[i];
      if (openDropdown.classList.contains('show__sortDropDown')) {
        openDropdown.classList.remove('show__sortDropDown');
      }
    }
  }
};


// Search
function searchIcon() {
    document.getElementById("searchFormInput").classList.toggle("show-search-input");
}

function searchIconClose() {
    document.getElementById("searchFormInput").classList.remove("show-search-input");
}

// Search Mobile
function searchIconMob() {
    document.getElementById("searchFormInputMob").classList.toggle("show__search-form-input-mob");
}

function searchIconCloseMob() {
    document.getElementById("searchFormInputMob").classList.remove("show__search-form-input-mob");
}


// Arrow icon animation
const accContent = document.querySelector(".menu__accordion__control");
const accBtn = document.querySelector(".menu__accordion__control__icon");
 
accContent.addEventListener("click", function (e) {
  accBtn.classList.toggle('rotate');
});


// let selector = document.querySelector("#formPhone");
// let im = new Inputmask ("+7 (999) 999-99-99");
// im.mask(selector);


// Notification Favorites
function heartFavorite() {
    const heartFavoriteInput = document.getElementById('heart-item');

    const notificationFavoriteAdd = document.getElementById('notificationFavoriteAdd');
    const notificationFavoriteDelete = document.getElementById('notificationFavoriteDelete');

    if (heartFavoriteInput.checked) {
        notificationFavoriteAdd.classList.toggle('notification__wrap__item-add-on');

        setTimeout(function() {
            notificationFavoriteAdd.classList.remove('notification__wrap__item-add-on');
        }, 2000);

        notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');

    } else {
        notificationFavoriteDelete.classList.toggle('notification__wrap__item-delete-on');
        
        setTimeout(function() {
            notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');
        }, 2000);

        notificationFavoriteAdd.classList.remove('notification__wrap__item-add-on');
    }
}


// Notification Page Favorites 
// window.addEventListener('click', function (event) {

//     let heartPageFavoriteInput = document.getElementsById('heart-item-second');
//     let heartPageFavoriteItem = document.getElementById('productsWrapFavorite');

//     const notificationFavoriteAdd = document.getElementById('notificationFavoriteAdd');
//     const notificationFavoriteDelete = document.getElementById('notificationFavoriteDelete');

//     heartPageFavoriteInput.addEventListener('click', function(e) {
//         if (heartPageFavoriteInput.checked) {
//             notificationFavoriteAdd.classList.toggle('notification__wrap__item-add-on');
    
//             console.log('Выделен');
    
//             setTimeout(function() {
//                 notificationFavoriteAdd.classList.remove('notification__wrap__item-add-on');
//             }, 2000);
    
//             notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');
    
//         } else {
//             console.log('Не выделен');
//             notificationFavoriteDelete.classList.toggle('notification__wrap__item-delete-on');
            
//             setTimeout(function() {
//                 notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');
//             }, 2000);
    
//             console.log('Не выделен');
    
//             heartPageFavoriteItem.style.display = 'none';
//         }
//     });

// });



// function heartPageFavorite() {
//     const heartPageFavoriteInput = document.querySelectorAll('.products__wrap__item__head__favorite__input');
//     const heartPageFavoriteItem = document.getElementById('productsWrapFavorite');

//     const notificationFavoriteAdd = document.getElementById('notificationFavoriteAdd');
//     const notificationFavoriteDelete = document.getElementById('notificationFavoriteDelete');

//     if (heartPageFavoriteInput.checked) {
//         notificationFavoriteAdd.classList.toggle('notification__wrap__item-add-on');

//         console.log('Выделен');

//         setTimeout(function() {
//             notificationFavoriteAdd.classList.remove('notification__wrap__item-add-on');
//         }, 2000);

//         notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');

//     } else {
//         console.log('Не выделен');
//         notificationFavoriteDelete.classList.toggle('notification__wrap__item-delete-on');
        
//         setTimeout(function() {
//             notificationFavoriteDelete.classList.remove('notification__wrap__item-delete-on');
//         }, 2000);

//         console.log('Не выделен');

//         heartPageFavoriteItem.style.display = 'none';
//     }
// }


