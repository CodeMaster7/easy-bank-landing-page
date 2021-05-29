"use strict"
const _btnHamburger = document.querySelector('#_btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

_btnHamburger.addEventListener('click', () => {
    // header.classList.toggle('open')
    if (header.classList.contains('open')) { // close Hamburger Menu
        header.classList.remove('open')
        overlay.classList.toggle('fade-in')
		overlay.classList.toggle('fade-out', !overlay.classList.contains('fade-in'))
    } else { // Open Hamburger Menu
        header.classList.add('open')
        overlay.classList.toggle('fade-in')
		overlay.classList.toggle('fade-out', !overlay.classList.contains('fade-in'))
    }
})