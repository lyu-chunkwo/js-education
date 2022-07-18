'use strict';


// todo Назначение глобального обработчика событий

window.addEventListener('DOMContentLoaded', () => {
  // todo Обработчик событий для ТАБОВ

  // todo Получаем необходимые классы
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');


  // todo Скрываем все табы
  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none'; // @ Способ без использования классов

      item.classList.add('hide'); // ! Добавляем к элементу с классом tabcontent ещё и класс hide-который прописан в css (скрывает блок)

      item.classList.remove('show', 'fade'); // ! Удаляем класс show который показывает блок и класс отвечающий за анимацию
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active'); // ! Удаляем активный класс
    });
  }

  // todo Активируем первый таб
  function showTabContent(i = 0) { // ! Если не передаётся аргумент то i будет равна нулю
    // tabsContent[i].style.display = 'block'; // @ Способ без использования классов

    tabsContent[i].classList.add('show', 'fade'); // ! Добавляем класс show и анимацию

    tabsContent[i].classList.remove('hide'); // ! Удаляем класс скрывающий блок

    tabs[i].classList.add('tabheader__item_active'); // ! Добавляем активный класс
  }

  // hideTabContent();
  // showTabContent();

  // todo Действия по событию click (делегирование событий)
  tabsParent.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => { // ! Аргумент i по умолчанию счётчик перебора
        if (event.target == item) {
          // hideTabContent();
          // showTabContent(i);
        }
      });
    }
  });
});

// todo Повторное написание кода без комментариев для закрепления

document.addEventListener('DOMContentLoaded', () => {
  const tabsBtns = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabsBtnsParrent = document.querySelector('.tabheader__items');

  function hideTabs() {
    tabContent.forEach(element => {
      element.classList.add('hide');
      element.classList.remove('show', 'fade');
    });

    tabsBtns.forEach(element => {
      element.classList.remove('tabheader__item_active');
    });
  }

  function showTabs(i = 0) {
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show', 'fade');
    tabsBtns[i].classList.add('tabheader__item_active');
  }

  hideTabs();
  showTabs();

  tabsBtnsParrent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabsBtns.forEach((element, i) => {
        if (target == element) {
          hideTabs();
          showTabs(i);
        }
      });
    }
  });


  // todo Написание кода по уроку с комментариями

  // todo Запуск таймера
  const deadline = '2022-07-18';

  // todo Функция рассчёта временнЫх промежутков
  // ! Сюда приходит переменная deadline
  function getTimeRemaining(deadline) {

    // ! Получаем разницу в миллисекундах между настоящим временем и датой окончания акции
    const t = Date.parse(deadline) - new Date(),

      // @ В одной секунде 1000 миллисекунд
      // ! Сначала узнаём кол. мс в минуте, затем в часе и в сутках, затем делим данные из переменной t на полученное вычисление
      days = Math.floor(t / (1000 * 60 * 60 * 24)),

      // ! Здесь всё так-же но в конце получаем остаток от деления-это и будет кол. часов
      hours = Math.floor(t / (1000 * 60 * 60) % 24),

      // ! Сначала получаем кол. сек. затем минут, затем в остатке получаем кол оставшихся минут
      minutes = Math.floor((t / 1000 / 60) % 60),

      // ! Аналогично
      seconds = Math.floor((t / 1000) % 60);

    // todo Возвращаем итог вычисления функции
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // todo Эта функция устанавливает таймер в HTML
  // ! Сюда приходит родитель таймера из HTML и данные из переменной deadline
  function setClock(selector, deadline) {
    // ! В аргументе находится класс .timer полученный при вызове функции
    const timer = document.querySelector(selector),

      // @ Получаем все селекторы из HTML
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),

      // ! В переменную timeInterval записываем функцию которая каждую секунду обновляет данные из функции updateClock()
      timeInterval = setInterval(updateClock, 1000);

    // ! Так как функция setInterval() запускается с задержкой в одну секунду HTML загружает сначала данные которые прописаны в тегах, поэтому вызываем функцию updateClock() перед тем как запустится setInterval(), чтобы загрузились актуальные данные.
    updateClock();

    // todo Эта функция добавляет ноль спереди цифры если значение меньше 10
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else if (num < 0) {
        return 0;
      } else {
        return num;
      }
    }

    // todo Эта функция обновляет таймер каждую секунду
    function updateClock() {

      // ! В переменную t помещаем вызов функции getTimeRemaining(), и получаем результат вычислений в виде обЪекта
      const t = getTimeRemaining(deadline); // ! Аргумент получаем из функции setClock()

      // ! Эти переменные мы объявили в начале функции setClock(), затем вставляем данные обращаясь к переменной t по ключу
      days.innerHTML = getZero(t.days); // ! Отправляем эти данные в качестве аргумента в функцию getZero()
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // ! Останавливаем таймер после того как время акции истекло
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  // getTimeRemaining(deadline);
  // setClock('.timer', deadline);


  // todo Повторное написание кода без комментариев для закрепления

  const zavershenieOtscheta = '2022-07-25';

  function poluchOstavsheesyaVremya(zavershenieOtscheta) {
    const total = Date.parse(zavershenieOtscheta) - new Date(),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor(total / (1000 * 60 * 60) % 24),
      minutes = Math.floor((total / 1000 / 60) % 60),
      seconds = Math.floor((total / 1000) % 60);

    return {
      'total': total,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }


  function ustanovkaInHtml(timerParent, zavershenieOtscheta) {
    const timer = document.querySelector(timerParent),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else if (num <= 0) {
        return 0;
      } else {
        return num;
      }
    }

    function updateTimer() {
      const k = poluchOstavsheesyaVremya(zavershenieOtscheta);

      days.innerHTML = getZero(k.days);
      hours.innerHTML = getZero(k.hours);
      minutes.innerHTML = getZero(k.minutes);
      seconds.innerHTML = getZero(k.seconds);

      if (timer.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  poluchOstavsheesyaVremya(zavershenieOtscheta);
  ustanovkaInHtml('.timer', zavershenieOtscheta);


  // todo Модальное окно

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

  function openModal() {
    // ! Использование методов add() и remove()
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    // ! Использование метода toggle()
    modal.classList.toggle('show');

    // ! Запрещает прокрутку когда мод. окно открыто
    document.body.style.overflow = 'hidden';

    // ! Если юзер сам открыл мод. окно то автооткрытие сбросится
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach(element => {
    element.addEventListener('click', openModal);
  });

  function closeModal() {
    // ! Использование методов add() и remove()
    // modal.classList.add('hide');
    // modal.classList.remove('show');

    // ! Использование метода toggle()
    modal.classList.toggle('show');

    // ! После закрытия мод. окна прокрутка вновь возможна
    document.body.style.overflow = '';
  }

  // ! При событии click мы передаём название функции для того чтобы она выполнилась
  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      // ! А здесь мы вызываем функцию
      closeModal();
    }
  });

  // todo Закрытие модального окна при помощи клавиши Escape на клавиатуре
  document.addEventListener('keydown', (event) => {

    // ! Вызываем функцию только если модальное окно открыто
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  // todo Автооткрытие модального окна в заданный интервал времени
  // const modalTimerId = setTimeout(openModal, 5000);



  // todo Функция открытия мод. окна когда юзер проскролит до конца страницы
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);


  // todo Создание карточки товара с помощью класса

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => {
          element.classList.add(className);
        });
      }

      element.innerHTML = `
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
      `;
      this.parent.append(element);
    }
  }

  const div = new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
  );
  div.render();

  new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    '.menu .container',
    'menu__item'
  ).render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    15,
    '.menu .container',
    'menu__item'
  ).render();
});