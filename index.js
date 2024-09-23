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

//Email
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const showError = (element, message) => {
  element.textContent = message
  setTimeout(() => {
    element.textContent = ''
  }, 5000)
}

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('HId0KwiU5kuMgAQbh')

  const form = document.querySelector('form')
  const nameError = document.querySelector('.name-error')
  const emailError = document.querySelector('.email-error')
  const messageError = document.querySelector('.message-error')
  const consentError = document.querySelector('.consent-error')
  const sendInfo = document.querySelector('.send-info')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const consent = formData.get('consent')

    if (emailPattern.test(email) && name && message && consent) {
      emailjs.sendForm('service_n1dkord', 'template_pq367v5', this).then(
        function () {
          showError(sendInfo, 'Письмо успешно отправлено!')
          event.target.reset()
        },
        function (error) {
          showError(sendInfo, `Ошибка при отправке письма: ${JSON.stringify(error)}`)
        }
      )
    } else {
      if (!name) {
        showError(nameError, 'Поле "Имя" не должно быть пустым')
      }

      if (!email) {
        showError(emailError, 'Поле "Email" не должно быть пустым')
      } else if (!emailPattern.test(email)) {
        showError(emailError, 'Неверный формат почты')
      }

      if (!message) {
        showError(messageError, 'Поле "Сообщение" не должно быть пустым')
      }

      if (!consent) {
        showError(consentError, 'Необходимо дать согласие на обработку персональных данных')
      }
    }
  })
})
