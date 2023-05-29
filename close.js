//Short event for essay 1 close button

const close = document.querySelector('#close-btn');
const intro = document.querySelector('.intr');

close.addEventListener('click', () => {
    intro.parentElement.removeChild(intro)
})

