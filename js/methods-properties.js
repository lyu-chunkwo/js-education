"use strict";

const string = "teSt";
const str = "teSt";
const arr = [1, 2, 3];

console.log(string.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(arr.length);


const fruit = 'some fruit';

console.log(fruit.indexOf('fruit')); // ! Этот метод определяет с какой позиции по порядку начинается данный кусок текста или присутствует ли такой текст вообще


const logg = 'Hello, World!';
console.log(logg.slice(-1)); // ! Если передать один аргумент то вырежется слово от начала и до конца, работает и с отрицательными числами.

console.log(logg.substring(7, 12)); // ! Аналог slice(), не работает с отрицательными числами

console.log(logg.substr(1, 5)); // ! Вырезает указанное количество символов

const num = 12.2;
console.log(Math.round(num)); // ! Метод для округления чисел

const test = '18.7px';
const test2 = '18.3px';
console.log(parseInt(test)); // ! Преобразует строку в число и округляет

console.log(parseFloat(test2)); // ! Преобразует строку в число, но не округляет