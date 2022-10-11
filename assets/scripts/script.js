const menu = document.querySelector('#menu')
const menuIcon = document.querySelector('#menu-icon')

function showMenu() {  
  menu.classList.toggle('show')
  changeMenuIcon()
}

function changeMenuIcon() {
  if (menu.classList.contains('show')) {
    menuIcon.src = 'assets/images/iconClose.svg'
    menuIcon.title = 'Fechar menu'
  } else {
    menuIcon.src = 'assets/images/iconHambuger.svg'
    menuIcon.title = 'Mostrar menu'
  }
}

menuIcon.addEventListener('click', showMenu)

addEventListener('resize', () => {
  changeMenuIcon()
  if (window.innerWidth > 768) {
    menu.classList.remove('show')
  }
})