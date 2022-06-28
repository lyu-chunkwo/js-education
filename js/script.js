"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

let userName = 'John';
let userNumber = 25;
userNumber = 24;
console.log(userNumber);

// ! Массивы и обЪекты

// ! Массив (Содержит значение, ключом является его порядковый номер)
const arr = ['a', 'b', 'c'];

// ! Массивы это частные случаи обЪектов
const arrObj = {
  a: 'a',
  1: 'b',
  2: 'c'
};

// ! Получение данных из массива
console.log(arr[1]);

// ! Получение данных из объекта, есть два способа
console.log(arrObj.a); // ! Через точку можно использовать только строчный ключ

console.log(arrObj[1]);
console.log(arrObj['a']); // ! Через квадратные скобки можно прописать и число, и строку в кавычках (приоритетнее)


// ! Добавление данных в обЪект
arrObj.b = '1234';// ! Добавляем данные с точкой
arrObj['b'] = '1234';// ! Или со скобками (приоритетнее)
console.log(arrObj['b']); // ! Получаем новые данные


// ! Объект (содеожит ключ и значение)
const obj = {
  Anna: 500,
  Alice: 800
};


// ! Команды для взаимодействия с пользователем
// alert('Hello');

// const result = confirm('Are you shure?');
// console.log(result);

// const answer = prompt('Вам уже есть 18 лет?', '');
// console.log(typeof (answer)); // ! Всегда получаем только строку

const answers = [];

// answers[0] = prompt('Как Ваше Имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers);
// console.log(typeof (answers)); // ! выведется только в браузере, в консоли VSCode будет ошибка

// ! ИНТЕРПОЛЯЦИЯ
const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); // ! Устаревший способ
console.log(`https://someurl.com/${category}/4`); // ! Интерполяция работает только с косыми кавычками

const user = 'Andrew';

// alert(`Привет, ${user}`); // ! Ещё пример интерполяции


// ! Операторы
let incr = 10,
  decr = 10;

incr++;
decr--;

console.log(incr++); // ! Постфиксный тип Сначала выводит текущее значение потом выполняет 
console.log(decr--);

console.log(++incr); // ! Префиксный тип Сначала выполняет потом выводит значение
console.log(--decr);

console.log(5 % 2); // ! Выводит остаток от деления

console.log(2 * 4 == 8); // ! Два равно означает сравнение

console.log(2 * 4 === '8'); // ! Три равно означает строгое сравнение ещё и по типу данных

const isChecked = true,
  isClose = true;

console.log(isChecked && isClose); // ! Оператор и-если все значения верны, возвращает true

const isCheck = true,
  isClosed = false;

console.log(isCheck && isClosed); // ! Оператор и-если хотябы одно значение неверно возвращает false

const checked = true,
  closer = false;

console.log(checked || closer); // ! Оператор или если хотя-бы одно значение верно возвращает true

const checker = false,
  closers = false;

console.log(checker || !closers); // ! Оператор ! означает отрицание, и в данном случае вернёт true


// ! УСЛОВИЯ 
if (4 == 9) {
  console.log('ok');
}