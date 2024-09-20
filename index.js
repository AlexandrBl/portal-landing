const openModalBtn = document.querySelector('.agree-btn')
const closeModalBtn = document.querySelector('.modal-close-btn')
const modal = document.querySelector('.modal-content')
const body = document.querySelector('body')

openModalBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  modal.style.display = 'block'
})

closeModalBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  modal.style.display = 'none'
})

body.addEventListener('click', () => {
  if (modal.style.display === 'block') {
    modal.style.display = 'none'
  }
})

modal.addEventListener('click', (event) => {
  event.stopPropagation()
})
