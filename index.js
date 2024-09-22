//Modal
const openModalBtn = document.querySelector('.agree-btn')
const closeModalBtn = document.querySelector('.modal-close-btn')
const closeModalBtn2 = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-content')
const body = document.querySelector('body')

openModalBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  modal.style.display = 'block'
  modal.classList.replace('close', 'open')
})

closeModalBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  modal.classList.replace('open', 'close')
  setTimeout(() => {
    modal.style.display = 'none'
  }, 200)
})

closeModalBtn2.addEventListener('click', (event) => {
  event.stopPropagation()
  modal.classList.replace('open', 'close')
  setTimeout(() => {
    modal.style.display = 'none'
  }, 200)
})

body.addEventListener('click', () => {
  if (modal.style.display === 'block') {
    modal.classList.replace('open', 'close')
    setTimeout(() => {
      modal.style.display = 'none'
    }, 200)
  }
})

modal.addEventListener('click', (event) => {
  event.stopPropagation()
})

//Burger
const openBurgerBtn = document.querySelector('.header__menu')
const burger = document.querySelector('.mobile-nav')
const burgerLinks = document.querySelectorAll('.nav__link_mobile')

openBurgerBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  burger.style.display = 'block'
  burger.classList.replace('close', 'open')
})

burgerLinks.forEach((burgerLink) => {
  burgerLink.addEventListener('click', (event) => {
    event.stopPropagation()

    burger.classList.replace('open', 'close')
    setTimeout(() => {
      burger.style.display = 'none'
    }, 200)
  })
})
