import './slider'
import { modals } from './modules/modals'
import { tabs } from './modules/tabs'
import { forms } from './modules/forms'
import { calculator } from './modules/calculator'
import { timer } from './modules/timer'

document.addEventListener('DOMContentLoaded', () => {
  let modalState = {}
  let deadline = '2023-02-1'

  modals()
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
  tabs('.decoration_slider', '.no_click', '.decoration_content>div>div', 'after_click')
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more')
  forms('form', 'input', modalState)
  calculator(modalState)
  timer('.container1', deadline)
})