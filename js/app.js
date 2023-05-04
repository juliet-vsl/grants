// Слайдер

const swiper = new Swiper('.swiper', {
    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// Форма обратной связи на первом экране

const form = document.querySelector('.header-form')
const button = document.querySelector('.header__button')
const send = document.querySelector('.header-form__button')
const close = document.querySelector('.header-form__close')

button.addEventListener('click', () => form.classList.toggle('non-active'))

send.addEventListener('click', () => form.classList.add('non-active'))

close.addEventListener('click', () => form.classList.add('non-active'))

// Мобильное меню

const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.header-nav__mobile')
const body = document.body

burger.addEventListener('click', function() {
  burger.classList.toggle('close')
  menu.classList.toggle('active')
  body.classList.toggle('noscroll')
})

const links = document.querySelectorAll('.header-nav__link')

links.forEach((menuLink) => {
  menuLink.addEventListener('click', function() {
    burger.classList.remove('close')
    menu.classList.remove('active')
    body.classList.remove('noscroll')
  })
})


  

