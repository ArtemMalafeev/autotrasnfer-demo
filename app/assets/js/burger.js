const toggle = document.getElementById('nav-toggle');
const list = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
    if (toggle.classList.contains('toggle--open')) {
        toggle.classList.remove('toggle--open');
        toggle.classList.add('toggle--close');
    } else {
        toggle.classList.remove('toggle--close');
        toggle.classList.add('toggle--open');
    }

    list.classList.toggle('navigation__list--open');
    body.classList.toggle('hidden');
});

const links = document.querySelectorAll('.navigation__item');
const logo = document.querySelector('.navigation__icon');

[...Array.from(links), logo].forEach((link) => {
    link.addEventListener('click', () => {
        toggle.classList.remove('toggle--open');
        toggle.classList.add('toggle--close');
        list.classList.remove('navigation__list--open');
        body.classList.remove('hidden');
    });
});