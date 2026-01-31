// Sticky Header
const navbar = document.querySelector('.nav-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

        if (currentScroll > 20) {
            navbar.classList.add('is-sticky');
        }
        else {
            navbar.classList.remove('is-sticky');
        }

});

// To Top Button
const toTopButton = document.getElementById('toTopButton');

window.addEventListener('scroll', () => {
    if  (window.scrollY > 400) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
