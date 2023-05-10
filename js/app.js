// Слайдер
try {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 4000
    },

    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
} catch (error) {

}


// Форма обратной связи на первом экране

const form = document.querySelector('.header-form')
const button = document.querySelector('.header__button')
const send = document.querySelector('.header-form__button')
const close = document.querySelector('.header-form__close')

try {
  button.addEventListener('click', () => form.classList.toggle('non-active'))

  send.addEventListener('click', () => form.classList.add('non-active'))
  
  close.addEventListener('click', () => form.classList.add('non-active'))
} catch(error) {

}

// Подложка для меню
const header = document.querySelector('.menu')

window.addEventListener('scroll', checkScroll)
document.addEventListener('DOMContentLoaded', checkScroll)

function checkScroll() {
    let scrollPos = window.scrollY;
    
    if(scrollPos > 50) {
        header.classList.add('active');
    } else
        header.classList.remove('active');
}



// Мобильное меню

const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.header-nav__mobile')
const body = document.body

try {
  burger.addEventListener('click', function() {
    burger.classList.toggle('close')
    menu.classList.toggle('active')
    body.classList.toggle('noscroll')
  })
} catch (error) {

}


const links = document.querySelectorAll('.header-nav__link')

try {
  links.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
      burger.classList.remove('close')
      menu.classList.remove('active')
      body.classList.remove('noscroll')
    })
  })
} catch(error) {

}


// Счетчик результатов

window.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  const countNums = () => { // объявляем функцию, чтобы всё, что относится к анимированию чисел было в одном месте
    const numbersObserver = new IntersectionObserver((entries, observer) => { // создаём наблюдатель за элементами, в которых будем увеличивать значение числа
      entries.forEach(entry => { // для каждого наблюдаемого элемента
        if (entry.isIntersecting) { // проверяем, находится ли он в видимой области браузера
          const count = new CountUp( // настраиваем новую анимацию для числа
            entry.target.id, // 1. задаём идентификатор элемента с числом
            0, // 2. задаём начальное число
            entry.target.dataset.num, // 3. задаём конечное число (берем из data-атрибута)
            0, // 4. задаём количество цифр после запятой
            entry.target.dataset.duration || 4, // 5. задаём продолжительность анимации в секундах (если у элемента есть атрибут data-duration, то берём из него значение, иначе назначаем 4 секунды по-умолчанию)
            { 
              separator: ' ', 
              prefix: entry.target.dataset.prefix || '', 
              suffix: entry.target.dataset.suffix || '' 
            }
          );
          count.start(() => { // запускаем настроенную анимацию и по окончании анимации...
            entry.target.parentElement.classList.add('numbers__item_done') // ...добавляем активный класс родительскому элементу
          })
          observer.unobserve(entry.target); // отключаем наблюдение за элементом
        }
      })
    });
    document.querySelectorAll('.numbers__item span').forEach(num => { // ищем элементы за которыми будем наблюдать, и для каждого...
      numbersObserver.observe(num) // ...запускаем наблюдение
    })
  }
  countNums() // запускаем объявленную функцию

})

// Часто-задаваемые вопросы

const tabsBtn = document.querySelectorAll('.question__item-description'); 
const tabsItems = document.querySelectorAll('.question__item-text'); 
const tabsIcons = document.querySelectorAll('.question__item-icon')

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)
    let tabIcon = currentBtn.getAttribute('data-icon')
    let currentIcon = document.querySelector(tabIcon)
    
    if( ! currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function(item) {
          item.classList.remove('active')
      });

      tabsItems.forEach(function(item) {
          item.classList.remove('active')
      });

      tabsIcons.forEach(function(item) {
        item.classList.remove('close')
      })

      currentBtn.classList.add('active')
      currentTab.classList.add('active')
      currentIcon.classList.add('close')
    } else {
      tabsBtn.forEach(function(item) {
          item.classList.remove('active')
      });

      tabsItems.forEach(function(item) {
          item.classList.remove('active')
      });

      tabsIcons.forEach(function(item) {
        item.classList.remove('close')
      })
    }
  });
}






  

