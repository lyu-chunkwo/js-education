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

// ! МЕТОДЫ МАССИВОВ

const array = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

array.pop(); // ! Отсекает последний элемент массива
array2.push(8, 5, 7); // ! Добавляет один или несколько элементов в конец массива
console.log(array);
console.log(array2);

for (let i = 0; i < array2.length; i++) { // ! Перебор массива обычным циклом
  console.log(array2[i]);
}

for (const iterator of array2) { // ! Перебор массива циклом for of (работает только с массивами),здесь работают break и continue
  console.log(iterator);
}

array2.forEach(function (item, i, array2) {  // ! foReach перебирает массив и принимает три аргумента. Не работают break и continue
  console.log(`${i}: ${item} внутри массива ${array2}`);
});


// todo МЕТОДЫ split() и join()
// const str = prompt("", "");
// const product = str.split(", "); // ! Получаем массив введённых данных из prompt
// console.log(product);
// console.log(product.join("; ")); // ! Массив переводим обратно в строку


// todo СОРТИРОВКА МЕТОД sort()

const letters = ['fff', 'jjj', 'www', 'aaa', 'vvv', 'bbb'];
letters.sort();
console.log(letters); // ! Хорошо работает со сторками

const nums = [5, 11, 23, 37, 0];
nums.sort(); // ! Числа сортирует как строки (по первой цифре числа)
console.log(nums);

const numbers = [5, 11, 23, 37, 0];
numbers.sort(compareNum); // ! Метод sort() принимает в качестве аргумента callback function
console.log(numbers);

function compareNum(a, b) { // ! Функция сравнения чисел (callback function)
  return a - b;
}



// ! Получение данных из массива
console.log(arr[1]);

// ! Получение данных из объекта, есть два способа
console.log(arrObj.a); // ! Через точку можно использовать только строчный ключ

console.log(arrObj[1]);
console.log(arrObj['a']); // ! Через квадратные скобки можно прописать и число, и строку в кавычках (приоритетнее)


// todo Добавление данных в обЪект
arrObj.b = '1234';// ! Добавляем данные с точкой
arrObj['b'] = '1234';// ! Или со скобками (приоритетнее)
console.log(arrObj['b']); // ! Получаем новые данные


// ! Объект (содержит ключ и значение)
const obj = {
  Anna: 500,
  Alice: 800
};

// ! ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// todo Использование цикла for in для перебора обЪекта

const options = {
  name: 'styles',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: function () {
    console.log('My new method');
  }
};

const { border, background } = options.colors;
console.log(border);

for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

// ! КАК УЗНАТЬ КОЛИЧЕСТВО ЭЛЕМЕНТОВ В ОБЪЕКТЕ
// todo Так как у объектов нет свойства length узнать количество элементов можно при помощи свойства объекта - Object.keys(), это свойство возвращает все ключи в объекте в виде массива, а уже к массиву мы можем применить свойство length

console.log(Object.keys(options).length);

options.makeTest();


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