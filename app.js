const menu = document.querySelector('#mobile')
const menulinks = document.querySelector('.list-menu')

const mobilemenu = () => {
     menu.classList.toggle('is-active')
     menulinks.classList.toggle('active')
}

menu.addEventListener('click',mobilemenu)