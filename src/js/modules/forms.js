function forms(formSelector, inputSelector) {
  const form = document.querySelectorAll(formSelector),
    input = document.querySelectorAll(inputSelector),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]')

  phoneInputs.forEach(phone => {
    phone.addEventListener('input', () => {
      phone.value = phone.value.replace(/\D/, '')
    })
  })

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