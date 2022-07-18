'use strict';

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // ! Получаем количество классов в элементе
// console.log(btns[0].classList.item(0)); // ! Получаем один из классов находящихся в элементе
// console.log(btns[0].classList.add('red', 'black'));  // ! Добавляем класс к уже имеющимся. Через запятую можно добавить несколько классов
// console.log(btns[0].classList.remove('some'));  // ! Удаляем класс
// console.log(btns[0].classList.toggle('black'));  // ! Если класс есть то он удалится, если нет класса то добавится

// console.log(btns[1].classList.add('blue'));  // ! 

// if (btns[1].classList.contains('blue')) { // ! Метод contains() позволяет проверить наличие или отсутствие определённого класса в элементе и возвращает true или false
//   console.log('blue');
// }


btns[0].addEventListener('click', () => {

  if (!btns[1].classList.contains('red')) { // ! Если класс отсутствует то он добавится
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red'); // ! Если класс есть, то удалится
  }

  //  btns[1].classList.toggle('red'); // ! Или если не нет необходимости проверки на присутствие класса использовать метод toggle()
});

wrapper.addEventListener('click', (event) => {

  console.dir(event.target); // ! Для того чтобы узнать таргет событие нужно вызвать эту команду

  if (event.target && event.target.tagName == 'BUTTON') { // ! Обращаемся к элементу по таргет событию tagName
    // if (event.target && event.target.classList.contains('blue')) { // ! 
    console.log('HELLO!');
  }
});


// todo Динамическое добавление элемента внутри родителя, при этом все свойства статических элементов ему передаются благодаря делегированию событий
const addBtn = document.createElement('button');
addBtn.classList.add('red');
wrapper.append(addBtn);