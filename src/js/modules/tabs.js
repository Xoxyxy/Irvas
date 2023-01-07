function tabs(headerSelector, tabsSelector, contentSelector, activeClass) {
  const tabsHeader = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentSelector)

  function hideContent() {
    tab.forEach(tab => {
      tab.classList.remove(activeClass)
    })

    content.forEach(content => {
      content.classList.add('hide')
      content.classList.remove('show')
    })
  }

  function showContent(i = 0) {
    content[i].classList.remove('hide')
    content[i].classList.add('show')
    tab[i].classList.add(activeClass)
  }

  tabsHeader.addEventListener('click', event => {
    const target = event.target
    if (target && (target.classList.contains(tabsSelector.replace(/\./g, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./g, '')))) {
      tab.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideContent()
          showContent(i)
        }
      })
    }
  })

  hideContent()
  showContent()
}

export { tabs }