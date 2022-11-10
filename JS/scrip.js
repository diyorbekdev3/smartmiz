const headerTop = document.querySelector('.header__top');
const search = document.querySelector('.fa-magnifying-glass');
let inpput = document.querySelector('.header__top__input');
const headerBanner = document.querySelector('.header__banner');
search.addEventListener('click', () => {
    inpput.classList.toggle('show');

  
});
headerBanner.addEventListener('click', () => {
    inpput.classList.remove('show');
    inpput.classList.add('hide');
});

document.addEventListener('keydown', (e) => {
    if(e.code == 'Escape' ) {
        inpput.classList.remove('show');
        inpput.classList.add('hide');
    }
});
