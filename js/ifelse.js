'use strict';


// ! УСЛОВИЯ 
if (4 == 9) {
  console.log('ok');
} else {
  console.log('Error');
}

const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Слишком много!');
} else {
  console.log('Ok!');
}

// ! Ещё вариант
(num === 50) ? console.log('Ok!') : console.log('Error');

// ! SWITCH

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 51:
    console.log("Неверно");
    break;
  case 150:
    console.log("Неверно");
    break;
  case 50:
    console.log("Всё верно");
    break;
  default:
    console.log('Не в этот раз');
}


const hamburger = true;
const fries = true;

if (hamburger && fries) {
  console.log('Покупаю');
} else {
  console.log('Иду в другой магазин');
}

console.log((hamburger && fries)); // ! Вернёт булево значение


const burger = 2;
const pomes = 1;
const cola = 0;

if (burger === 3 && cola === 1 && pomes) {
  console.log('Берём');
} else {
  console.log('Уходим');
}


// ! Оператор && прекращает дальнейшее выполнение кода если встречает первую же неправду

console.log(1 && 0); //! вернёт первую неправду(0 это false)
console.log(1 && 5); // ! вернёт последнее правдивое значение
console.log(null && 5); // ! Вернёт первую неправду(null это false)
console.log(0 && 'awerbetbwet'); // ! Вернёт первую неправду (0 это false)


const hotdog = 3;
const free = 0;
const pepsi = 0;

if (hotdog || free || pepsi) {
  console.log('Сидим дальше');
} else {
  console.log('Уходим');
}

console.log((hotdog || free || pepsi)); // ! Вернёт булево значение

// ! Оператор || прекращает дальнейшее выполнение кода если встречает первое же правдивое выражение

console.log(1 || 0); // ! вернёт первое же правдивое значение во всех случаях
console.log(1 || 5);
console.log(null || 5);
console.log(0 || 'awerbetbwet');

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


const nuddle = 3;
const potate = 3;
const fanta = 0;
const nuggets = 2;

if (nuddle === 3 && fanta === 2 || potate === 3 && nuggets) {
  console.log('Сидим дальше');
} else {
  console.log('Уходим');
}

console.log(nuddle === 3 && fanta === 2 || potate === 3 && nuggets); // ! В данном случае вернётся значение 2 так как первое выражение вернёт false, далее виторое выражение состоит из двух true поэтому возвращается последнее значение из всей цепочки



// ! Задачи
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);

const hamburgers = 3;
const friess = 3;
const colas = 0;
const nuggetss = 2;

if (hamburgers === 3 && colas || friess === 3 && nuggetss) {
  console.log('Done!');
}


const ahamburger = 3;
const afries = 3;
const acola = 0;
const anuggets = 2;

if (ahamburger === 3 && acola || afries === 3 && anuggets) {
  console.log('Done!')
}


let uhamburger;
const ufries = NaN;
const ucola = 0;
const unuggets = 2;

if (uhamburger && ucola || ufries === 3 && unuggets) {
  console.log('Done!')
} else {
  console.log('Error');
}


