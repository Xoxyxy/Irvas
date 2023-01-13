function images() {
  const imgModal = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImg = document.createElement('img'),
    body = document.body

  imgModal.classList.add('popup', 'flex', 'hide')
  bigImg.classList.add('max')
  workSection.append(imgModal)
  imgModal.appendChild(bigImg)

  workSection.addEventListener('click', event => {
    event.preventDefault()

    const target = event.target

    if (target && target.classList.contains('preview')) {
      imgModal.classList.remove('hide')
      body.classList.add('modal-open')
      const path = target.parentNode.getAttribute('href')
      bigImg.setAttribute('src', path)
    }

    if (target && target.classList.contains('popup')) {
      imgModal.classList.add('hide')
      body.classList.remove('modal-open')
    }
  })
}

export { images }