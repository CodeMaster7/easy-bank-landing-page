"use strict"
const _btnHamburger = document.querySelector('#_btnHamburger')

_btnHamburger.addEventListener('click', () => {
    // _btnHamburger.classList.toggle('open')
    if (_btnHamburger.classList.contains('open')) {
        _btnHamburger.classList.remove('open')
    } else {
        _btnHamburger.classList.add('open')
    }
})