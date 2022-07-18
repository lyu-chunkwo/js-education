'use strict';

let number = 5;

function logNumber() {
  console.log(number); // ! Функция не нашла внутри себя переменную, и поэтому обратилась к внешней переменной
}

number = 10; // ! Функция сначала ищет текущее значение внешних переменных (то-есть тех которые находятся после самой функции, но до её вызова), если не находит использует те, что есть.

logNumber();

// !2222222222222222222222222222222222222222222

let num = 5;

function logNum() {
  let num = 7;
  console.log(num); // ! В этом примере функция определила внутри себя переменную num и использовала её
}

num = 10;

logNum();


// ! 333333333333333333333333333333333333333333

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter += 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter(); // ! Переменная increments получает свойства функции и содержит в себе замыкание

const c1 = increment(); // !  И вызывается уже как функция
const c2 = increment();
const c3 = increment();

const test = createCounter(); // ! Здесь уже переменная test получает свойства функции и содержит в себе замыкание

const a = test(); // !  И вызывается как функция
const b = test();
const c = test();

console.log(c1, c2, c3, a, b, c);



// ! Частичное применение замыканий
let f = 4;
function addX(x) {

  return function (n) {

    return n + x;
  };
}
const addThree = addX(3);
let d = addThree(f);
console.log('example partial application', d);