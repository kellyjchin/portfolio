'use strict'
let themeSwitcher = document.querySelector('#theme-switcher');
document.addEventListener('DOMContentLoaded', e => {
    let bodyTag = document.querySelector('body');
    let savedTheme = localStorage.getItem('saved-theme');
    bodyTag.classList = [];
    
    if ( savedTheme ) {
        bodyTag.classList.add(savedTheme);
    }

    if ( savedTheme === 'dark') {
        themeSwitcher.selectedIndex = 1;
    }

    if ( savedTheme === 'light') {
        themeSwitcher.selectedIndex = 2;
    }

    if ( !savedTheme ) {
        themeSwitcher.selectedIndex = 0;
    }
})

themeSwitcher.addEventListener('change', e => {
    let selectedTheme = themeSwitcher.value;
    let bodyTag = document.querySelector('body');
    bodyTag.classList = [];
    if ( selectedTheme ) {
        bodyTag.classList.add(selectedTheme);
    }
    localStorage.setItem('saved-theme', selectedTheme);
})
