const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon')
document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        //click to toggle top menu
        topMenu.classList.toggle('ct-topmenu-expended')
        topMenu.classList.toggle('hidden')
    } else {
        //click outside from toggle top menu
        if (topMenu.classList.contains('ct-topmenu-expended')) {
            topMenu.classList.remove('ct-topmenu-expended')
            topMenu.classList.add('hidden')
        }
    }
})