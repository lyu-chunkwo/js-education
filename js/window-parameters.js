'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth; // ! Вернёт ширину включая паддинги
const height = box.clientHeight;
const width2 = box.offsetWidth; // ! Вернё размеры только видимой части
const height2 = box.offsetHeight;
const width3 = box.scrollWidth; //! Вернёт размер всего блока включая скрытую часть
const height3 = box.scrollHeight;

console.log(width, width2, width3, height, height2, height3);


const btn1 = document.querySelector('.btn_1');
const btn2 = document.querySelector('.btn_2');

// todo Раскрывает весь контент при клике
btn1.addEventListener('click', () => {
  box.style.height = box.scrollHeight + 'px';
});

// todo Вернёт при клике проскроленный верх контент в px
btn2.addEventListener('click', () => {
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // ! Вернёт координаты элемента HTML
console.log(box.getBoundingClientRect().top); // ! Вернёт top координаты элемента HTML

const style = window.getComputedStyle(box);
console.log(style); // ! Вернёт все стили применённые к элементу
console.log(style.display); // ! Вернёт запрашиваемый элемент из объекта