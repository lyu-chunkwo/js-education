"use strict";

function showFirstMessage1() {
  console.log('Hello, World!');
}

function showFirstMessage2(text) {
  console.log(text);
}

let num = 20;

function showFirstMessage3(text) {
  console.log(text);
  num = 10; // ! Глобальную переменную можно использовать внутри функции
}

function showFirstMessage4(text) {
  console.log(text);
  let num = 7; // ! Но если переменная объявлена внутри функции, то вне функции она не видна
  console.log(num);
}

showFirstMessage4('check');

// * ЗАМЫКАНИЕ
// ! Если функция не находит переменную внутри себя она идёт на уровень выше и ищет её там и так пока не найдёт. Это называется ЗАМЫКАНИЕ-то-есть это сама функция со всеми внешними переменными которые ей доступны

function showFirstMessage5(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage1();
showFirstMessage2('Hello, World!');
showFirstMessage3('Hello, World!');
console.log(num);

function calc(a, b) {
  return (a + b); // ! Возвращает результат во внешнюю среду, после return нельзя прописывать никакой другой код, потому-что он все-равно не выполнится
}

console.log(calc(2, 3));
console.log(calc(4, 6));
console.log(calc(10, 3));

function ret() {
  let num = 50;

  return num;
}

const anotherNum = ret();
console.log(anotherNum);


// ! FUNCTION EXPRESSION - Функция в переменной-такую функцию нельзя использовать после её вызова в отличии от FUNCTION DECLARATION(Обычная функция)
const logger = function () {
  console.log('Hello!');
};

logger();

// ! СТРЕЛОЧНЫЕ ФУНКЦИИ
const calc2 = (a, b) => { return a + b; };

console.log(calc2(4, 6));
// ! END СТРЕЛОЧНЫЕ ФУНКЦИИ


// ! Про Аргументы функции
// todo Не использовать множество функций, а написать одну универсальную

const usdCurrency = 80;
const euroCurrency = 85;

function convert(amount, currency) {
  console.log(currency * amount);
}

convert(500, usdCurrency);
convert(500, euroCurrency);


// ! Про важность return

const usdCurr = 80;
const discount = 0.9;

function converter(amount, currency) {
  return amount * currency;
}

function promotion(result) {
  console.log(result * discount);
}

const res = converter(500, usdCurr);
promotion(res);



function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return; // ! Завершает выполнение кода и выбрасывает из функции. Возвращает undefined
    }
  }
  console.log('Завершено пять итераций'); // ! Это сообщение не выведется т.к. сработал return
}

test();


function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {

    if (i === times) {

      str += `${num * i}`;
      // Тут без черточек в конце
    } else {

      str += `${num * i}---`; // !  Это тоже самое, что и - str = str + num * i + "---"

    }
  }

  return str;
}

const callFunc = getMathResult(10, 5);
console.log(callFunc);


function sayHello(name) {
  console.log(`Hi, ${name}!`);
}

sayHello('Anton');

function returnNeighboringNumber(params) {
  return [params - 1, params, params + 1]
}

console.log(returnNeighboringNumber(5));


function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return num; // ! Если выполнится условие, то вернётся просто первый аргумент и код прекратит работу
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`; // ! Пока i не равно times будет выполняться условие else
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }

  return str;
}

console.log(getMathResult(3, 10));


function calculateVolumeAndArea(length) {
  if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = length * length * length;
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));


function wagon(seatNumber) {
  if (typeof (seatNumber) != 'number') {
    return 'Нужно ввести число';

  } else if (seatNumber < 0) {
    return 'Введите число больше нуля';

  } else if (!Number.isInteger(seatNumber)) {
    return 'Введите целое число';

  } else if (seatNumber === 0 || seatNumber > 36) {
    return 'Таких мест не существует';

  }

  for (let i = 4; i < 36; i = i + 4) {
    if (seatNumber <= i) {
      return Math.ceil(i / 4);
    }
  }
}

console.log(wagon(12));


function getTimeFromMinutes(minutesTotal) {
  if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
    return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  let minutes = minutesTotal % 60;

  if (minutes != 11 && minutes != 12 && minutes != 13 && minutes != 14) {
    minutes = String(minutes);
    minutes = minutes.slice(-1);
    minutes = Number(minutes);
  }

  let hoursStr = '';

  switch (hours) {
    case 0:
      hoursStr = 'часов';
      break;
    case 1:
      hoursStr = 'час';
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = 'часа';
      break;
    default:
      hoursStr = 'часов';
  }

  let minAfterHour = '';

  switch (minutes) {
    case 0:
      minAfterHour = 'минут';
      break;
    case 1:
      minAfterHour = 'минута';
      break;
    case 2:
    case 3:
    case 4:
      minAfterHour = 'минуты';
      break;
    default:
      minAfterHour = 'минут';
  }
  console.log(minutes);
  return `Это ${hours} ${hoursStr} и ${minutes} ${minAfterHour}`;
}

console.log(getTimeFromMinutes(1));


function largestNumber(a, b, c, d) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number') {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}

console.log(largestNumber(20, 5, 16, 50));
console.log(largestNumber(20, 5.5, 3, '17'));