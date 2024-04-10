'use strict'
let hamburgerMenu = document.querySelector('.hamburger-menu button');
let mobileMenu = document.querySelector('.mobile-menu');
hamburgerMenu.addEventListener('click', () => {

    if (mobileMenu.classList.contains('closed')) {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('opened');
        return;
    }

    if (mobileMenu.classList.contains('opened')) {
        mobileMenu.classList.remove('opened');
        mobileMenu.classList.add('closed');
        return;
    }
})

let mobileLinks = document.querySelectorAll('.mobile-link a');
mobileLinks.forEach( mobileLink => {
    mobileLink.addEventListener('click', () => {
        mobileMenu.classList.remove('opened');
        mobileMenu.classList.add('closed');
    })
})