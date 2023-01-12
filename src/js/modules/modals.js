function modals() {
  const body = document.body

  function bindModal(btnSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const btn = document.querySelectorAll(btnSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]')

    function windowsHide() {
      windows.forEach(window => {
        window.classList.remove('show')
        window.classList.add('hide')
      })
    }

    function showModal(element) {
      windowsHide()

      element.classList.add('show')
      body.classList.add('modal-open')
    }

    function hideModal(element) {
      windowsHide()

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
      if (event.target && event.target == modal && closeClickOverlay) {
        hideModal(modal)
      }
    })

    document.addEventListener('keydown', event => {
      if (event.code == 'Escape' && modal.classList.contains('show')) {
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
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
  // showModalByTime('.popup', 60000)
}

export { modals }