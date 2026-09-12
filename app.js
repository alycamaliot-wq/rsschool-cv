const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})
// Navigation

const navShowBtn = document.querySelector(`.navigation-show-btn`)
const navHideBtn = document.querySelector(`.navigation-hide-btn`)
const navigation = document.querySelector(`.navigation`)

function navShow() {
  navigation.classList.remove('navigation-hide')
  navigation.classList.add('navigation-show')
  navShowBtn.classList.add(`navigation-btn-hide`)
  navHideBtn.classList.add('navigation-btn-show')
  navHideBtn.classList.remove(`navigation-btn-hide`)
  navShowBtn.addEventListener('animationend', () => {})
}
function navHide() {
  navigation.classList.remove('navigation-show')
  navigation.classList.add('navigation-hide')
  navHideBtn.classList.add(`navigation-btn-hide`)
  navShowBtn.classList.remove(`navigation-btn-hide`)
  navShowBtn.classList.add(`navigation-btn-show`)
  navigation.addEventListener('animationend', (e) => {
    if (e.animationName === 'navigationHide') {
      navigation.classList.remove('navigation-hide')
    }
  })
}
navShowBtn.addEventListener('click', () => {
  navShow()
})
navHideBtn.addEventListener('click', () => {
  navHide()
})