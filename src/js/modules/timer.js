function timer(timerSelector, date) {
  const endDate = new Date(date)

  const timer = document.querySelector(timerSelector),
    daysNumb = timer.querySelector('#days'),
    hoursNumb = timer.querySelector('#hours'),
    minNumb = timer.querySelector('#minutes'),
    secNumb = timer.querySelector('#seconds')

  const daysText = timer.querySelector('#days-text'),
    hoursText = timer.querySelector('#hours-text'),
    minText = timer.querySelector('#minutes-text'),
    secText = timer.querySelector('#seconds-text')

  const declOfNum = (number, text) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return text[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  const addNull = value => value < 10 ? `0${value}` : value

  const timeCount = () => {
    let nowDate = new Date(),
      timerLeft = endDate - nowDate,
      days, hours, min, sec

    if (timerLeft <= 0) {
      days = 0
      hours = 0
      min = 0
      sec = 0
    } else {
      days = Math.floor(timerLeft / 1000 / 60 / 60 / 24)
      hours = Math.floor((timerLeft / 1000 / 60 / 60) % 24)
      min = Math.floor((timerLeft / 1000 / 60) % 60)
      sec = Math.floor((timerLeft / 1000) % 60)
    }

    daysNumb.innerHTML = addNull(days)
    hoursNumb.innerHTML = addNull(hours)
    minNumb.innerHTML = addNull(min)
    secNumb.innerHTML = addNull(sec)

    daysText.innerHTML = declOfNum(days, ['День', 'Дня', 'Дней'])
    hoursText.innerHTML = declOfNum(hours, ['Час', 'Часа', 'Часов'])
    minText.innerHTML = declOfNum(min, ['Минута', 'Минуты', 'Минут'])
    secText.innerHTML = declOfNum(sec, ['Секунда', 'Секунды', 'Секунд'])
  }

  timeCount()
  setInterval(timeCount, 1000)
}

export { timer }