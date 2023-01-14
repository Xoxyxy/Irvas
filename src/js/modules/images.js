import { calcScroll } from './calcScroll'

function images() {
  const imgModal = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImg = document.createElement('img'),
    body = document.body,
    scroll = calcScroll()

  imgModal.classList.add('popup', 'flex', 'hide')
  bigImg.classList.add('max')
  workSection.append(imgModal)
  imgModal.appendChild(bigImg)

  workSection.addEventListener('click', event => {
    event.preventDefault()

    const target = event.target

    function hideImgModal() {
      imgModal.classList.add('hide')
      imgModal.classList.remove('fadedModals')
      body.classList.remove('modal-open')
      body.style.marginRight = ''
    }

    if (target && target.classList.contains('preview')) {
      imgModal.classList.add('fadedModals')
      imgModal.classList.remove('hide')
      body.classList.add('modal-open')
      body.style.marginRight = scroll + 'px'
      const path = target.parentNode.getAttribute('href')
      bigImg.setAttribute('src', path)
    }

    if (target && target.classList.contains('popup')) {
      hideImgModal()
    }

    document.addEventListener('keydown', event => {
      if (event.code == 'Escape' && !imgModal.classList.contains('hide')) {
        hideImgModal()
      }
    })
  })
}

export { images }