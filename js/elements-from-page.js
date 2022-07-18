'use strict';

// todo Обращение к элементам страницы (Старый способ)

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[3]);

const circles = document.getElementsByClassName('circle');
console.log(circles[2]);

// todo Обращение к элементам страницы (Современный способ)

// ! Выбирает все элементы выбранного селектора
const hearts = document.querySelectorAll('.heart');
hearts.forEach(function (item) {
  console.log(item);
});

// ! Выбирает один первый же селектор с таким именем на странице
const oneHeart = document.querySelector('.circle');
console.log(oneHeart);