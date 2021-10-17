const { duration } = require('@material-ui/core')

/* ============== SHOW MENU ============== */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

/* ============== MENU SHOW ============== */
/* Validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* ============== MENU SHOW ============== */
/* Validate if constant exists*/

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* ============== REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/* ============== CHANGE BACKGROUND HEADER ============== */

function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ============== SWIPER DISCOVER ============== */
var swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
})
/* ============== VIDEO ============== */
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon')

function playPause() {
  if (videoFile.paused) {
    // Play Video

    videoFile.play()

    // We change the icon

    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  } else {
    // Pause Video

    videoFile.pause()

    // We change the icon

    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
  }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
  // Video ends, icon change

  videoIcon.classList.add('ri-play-line')
  videoIcon.classList.remove('ri-pause-line')
}

// ended when video ends

videoFile.addEventListener('ended', finalVideo)

/* ============== SHOW SCROLL UP ============== */
function ScrollUp() {
  const scrollUp = document.getElementById('scroll-up')

  // When the scroll is higher than 200 viewport height, add the show-scroll class to the tag with the scroll.

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', ScrollUp)

/* ============== SCROLL SECTIONS ACTIVE LINK ============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* ============== DARK LIGHT THEME ============== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previusly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    'iconTheme'
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ============== SCROLL REVEAL ANIMATION ============== */

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
})

sr.reveal(`.home__data, .home__social-link`, {
  origin: 'top',
  interval: 100,
})
