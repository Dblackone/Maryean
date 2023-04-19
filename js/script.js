

// get references to DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// set initial state of menu
let showMenu = false;

// toggle menu state
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // set menu state to true
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // set menu state to false
    showMenu = false;
  }
}

// add click event listener to menu button
menuBtn.addEventListener('click', toggleMenu);

// implement typing effect on "I am a" section
const phrases = ['freelance writer', 'SEO specialist', 'geography student'];
let index = 0;
let letterIndex = 0;
let currentPhrase = '';
let typeTimeout;

function type() {
  if (letterIndex < phrases[index].length) {
    currentPhrase += phrases[index][letterIndex];
    document.querySelector('.typing').textContent = currentPhrase;
    letterIndex++;
    typeTimeout = setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (letterIndex > 0) {
    currentPhrase = phrases[index].substring(0, letterIndex - 1);
    document.querySelector('.typing').textContent = currentPhrase;
    letterIndex--;
    typeTimeout = setTimeout(erase, 50);
  } else {
    index++;
    if (index === phrases.length) {
      index = 0;
    }
    setTimeout(type, 1500);
  }
}

setTimeout(type, 1500);
