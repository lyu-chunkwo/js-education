'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.querySelectorAll('.circle'),
  hearts = document.querySelectorAll('.heart'),
  buttons = document.querySelector('.buttons'),
  oneHeart = document.querySelector('.circle'),
  wrapper = document.querySelector('.wrapper'),
  inCircles = document.querySelector('.circles'),
  inHearts = wrapper.querySelectorAll('div'), // ! В данном примере переменная inHearts будет обращаться не ко всему документу, а только к родителю в котором расположены элементы
  inHeart = wrapper.querySelector('.heart'); // ! В данном примере переменная inHeart будет обращаться не ко всему документу, а только к родителю в котором расположен первый элемент из всех имеющихся

console.log(buttons);

// ! Если нужно поменять несколько css свойств тогда используем cssText 

box.style.cssText = `margin-bottom: 20px; background-color: green; width: 350px`;

// ! Перебираем массив полученный со страницы

circles.forEach(item => {
  item.style.color = 'lime';
});


// ! Добавляем элементы HTML разметки на страницу

// todo Метод append-элемент добавляется в конец выбранного селектора

// const text = document.createTextNode('Some text'); // ! Обычно не используется

const inCircle = document.createElement('div'); // ! Создаём переменную, в которой хранится создание нового элемента для HTML страницы

inCircle.classList.add('circle'); // ! Затем добавляем класс для этого элемента

// document.querySelector('.circles').append(inCircle); // ! Если переменная используется один раз, чтобы не создавать лишнюю переменную подойдёт такой способ

inCircles.append(inCircle); // ! Если переменная используется несколько раз подходит этот способ (переменная inCircles подхватится из блока переменных сверху)

// inCircles.appendChild(inCircle); // * Устаревший способ (.appendChild)


// todo Метод prepand-элемент добавляется в начало выбранного селектора
const div = document.createElement('div'); // ! Создание переменной
const div2 = document.createElement('div');

div.classList.add('purple'); // ! Добавление класса
div2.classList.add('yellow');

hearts[0].before(div); // ! Вставка элемента в выбранное место в HTML
hearts[0].before(div2);

// hearts[0].prepend(div);


// todo Удаление выбранного селектора

btns[3].remove();

// todo Замена HTML элементов

hearts[1].replaceWith(circles[2]);

// todo Вставка текста в структуру HTML

div.innerHTML = "<h3>Hello, World! Hi, People.</h3>"; // ! Данный способ работает для вставки как HTML кода так и простого текста

// div.textContent = 'Good Day!'; // ! Данный способ работает только с текстом

// todo Вставка HTML кода в стуктуру HTML

div2.insertAdjacentHTML('afterbegin', '<h3>Любой HTML код код внутри вначале элемента</h3>');
div2.insertAdjacentHTML('afterend', '<h3>Любой HTML код после элемента</h3>');
div2.insertAdjacentHTML('beforebegin', '<h3>Любой HTML код перед элементом</h3>');
div2.insertAdjacentHTML('beforeend', '<h3>Любой HTML код внутри в конце элемента</h3>');


// todo Получение HTML консрукции

const getHTML = wrapper.innerHTML;
console.log(getHTML);