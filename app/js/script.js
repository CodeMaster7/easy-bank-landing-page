"use strict"
const _btnHamburger = document.querySelector('#_btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

_btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) { // close Hamburger Menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach( element => {
			element.classList.remove('fade-in')
			element.classList.add('fade-out')
		})
    } else { // Open Hamburger Menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach( element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})