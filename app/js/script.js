"use strict"
const _btnHamburger = document.querySelector('#_btnHamburger')
const header = document.querySelector('.header')

_btnHamburger.addEventListener('click', () => {
    // header.classList.toggle('open')
    if (header.classList.contains('open')) {
        header.classList.remove('open')
    } else {
        header.classList.add('open')
    }
})