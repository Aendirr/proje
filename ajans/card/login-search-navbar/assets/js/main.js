/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})
document.addEventListener('contextmenu', function(e) {
   e.preventDefault();
});
   
document.addEventListener('selectstart', function(e) {
   e.preventDefault();
});
document.addEventListener('DOMContentLoaded', function() {
   // main-content ID'sine sahip elemeni bul
   var mainContent = document.getElementById('main-content');

   // main içine bir iframe ekleyerek proje8 url'sini göster
   var iframe = document.createElement('iframe');
   iframe.src = 'http://127.0.0.5:5500/proje8';
   iframe.style.width = '100%';
   iframe.style.height = '100vh';

   // main içine iframe'i ekle
   mainContent.appendChild(iframe);
});

//Search Bar


