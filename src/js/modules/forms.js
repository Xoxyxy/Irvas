import { checkNumInputs } from './checkNumInputs'

function forms(formSelector, inputSelector, state) {
  const form = document.querySelectorAll(formSelector),
    input = document.querySelectorAll(inputSelector)

  checkNumInputs('input[name="user_phone"]')

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...'
  }

  async function postDate(url, data) {
    document.querySelector('.status').innerHTML = message.loading
    const request = await fetch(url, {
      method: 'POST',
      body: data
    })

    return await request.text()
  }

  form.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()

      const statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      form.appendChild(statusMessage)

      const formData = new FormData(form)
      if (form.getAttribute('data-calc') == 'end') {
        for (let key in state) {
          formData.append(key, state[key])
        }
      }

      postDate('assets/server.php', formData)
        .then(result => {
          console.log(result)
          statusMessage.innerHTML = message.success
        })
        .catch(() => {
          statusMessage.innerHTML = message.failure
        })
        .finally(() => {
          input.forEach(input => {
            input.value = ''
          })
          setTimeout(() => {
            statusMessage.remove()
          }, 5000)
        })
    })
  })
}

export { forms }