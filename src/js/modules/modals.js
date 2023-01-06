function modals() {
  const body = document.body

  function bindModal(btnSelector, modalSelector, closeSelector) {
    const btn = document.querySelectorAll(btnSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector)

    function showModal(element) {
      element.classList.add('show')
      body.classList.add('modal-open')
    }

    function hideModal(element) {
      element.classList.remove('show')
      body.classList.remove('modal-open')
    }

    btn.forEach(btn => {
      btn.addEventListener('click', event => {
        if (event.target) event.preventDefault()
        showModal(modal)
      })
    })

    close.addEventListener('click', () => {
      hideModal(modal)
    })

    modal.addEventListener('click', event => {
      if (event.target && event.target == modal) {
        hideModal(modal)
      }
    })
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).classList.add('show')
      body.classList.add('modal-open')
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  // showModalByTime('.popup', 60000)
}

export { modals }