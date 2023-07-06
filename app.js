const hamMenuBtn = document.querySelector('.menu-small-btn')
const smallMenu = document.querySelector('.menu-small')
const headerHamMenuBtn = document.querySelector('.ham-menu-open')
const headerHamMenuCloseBtn = document.querySelector(
  '.ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.sm-nav-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}


const headerLogoConatiner = document.querySelector('.logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


