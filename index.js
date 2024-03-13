const open = document.getElementById('menu__open');
const close = document.getElementById('menu__close');
const menu = document.getElementById('menu__container');


open.addEventListener('click', (e) => {
    e.preventDefault();

    open.classList.add('hidden');
    close.classList.remove('hidden');
    menu.classList.remove('hidden');
});

close.addEventListener('click', (e) => {
    e.preventDefault();

    close.classList.add('hidden');
    open.classList.remove('hidden');
    menu.classList.toggle('hidden');
});