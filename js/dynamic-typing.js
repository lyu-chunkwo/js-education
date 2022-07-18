'use strict';


// todo Преобразование типов данных в строку
console.log(typeof (String(null))); // ! Преобразование null в строку
console.log(typeof (String(4))); // ! Преобразование number в строку

console.log(typeof (5 + '')); // ! Конкатенация чисел со строкой всегда вернёт строку

const num = 4;

console.log("http://vk.com/catalog/" + num); // ! Пример конкатенации строки и числа

const fontSize = 24 + 'px';

console.log(fontSize); // ! Ещё пример


// todo Преобразование типов данных в числа

console.log(typeof (Number('6')));

console.log(typeof (+'8')); // ! Использование оператора унарный плюс

console.log(typeof (parseInt('15px', 10)));
console.log(parseInt('15px', 10));


// todo Преобразование типов данных в булево значение

// * Типы данных которые всегда возвращают false - 0, '', null, undefined, NaN

let switcher = null;

if (switcher) {
  console.log('Working...');
} else {
  console.log('Not working...');
}

switcher = 1;

if (switcher) {
  console.log('Working...');
} else {
  console.log('Not working...');
}


console.log(typeof (Boolean('6')));

console.log(typeof (!!'6'));