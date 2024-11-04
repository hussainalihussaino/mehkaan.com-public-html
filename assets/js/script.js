const mobileMenu = document.getElementById('mobileMenu')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

document.addEventListener('click', (event) => {
    if (event.target.parentElement == mobileMenu) {
        mobileMenu.classList.add('hidden')
    }
})
