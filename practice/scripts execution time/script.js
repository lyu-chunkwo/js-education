'use strict';

const btn = document.querySelector('.btn');
let timerId4;

const timerId = setTimeout(() => {
  console.log('Hello!');
}, 2000);

const timerId2 = setTimeout((text) => {
  console.log(text);
}, 3000, 'Hello2');

const timerId3 = setTimeout(logger, 4000);

clearInterval(timerId3); // ! Сбрасывает таймер

btn.addEventListener('click', () => {

  timerId4 = setInterval(logger, 1000); // ! Повторяется с заданным интервалом

});

let i = 0;

function logger() {
  if (i === 3) {
    clearInterval(timerId4);
  }
  console.log('Hello3');
  i++;
}

// todo Рекурсивный запуск функции

// let id = setTimeout(function log() {
//   console.log('Hello5');
//   id = setTimeout(log, 500);
// }, 500);


// todo Простейшая анимация

function myAnimation() {
  const element = document.querySelector('.box');
  let position = 0;
  const id = setInterval(frame, 10);

  function frame() {
    if (position == 300) {
      clearInterval(id);
    } else {
      position++;
      element.style.top = position + 'px';
      element.style.left = position + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);