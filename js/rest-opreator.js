'use strict';
// todo Оператор ...rest может принимать столько аргументов сколько прийдёт и формирует из них массив
const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage', 'array', 'object');


// todo В вызове этой функции должно было передаться два аргумента но пришёл один, в этом случае чтобы избежать ошибки устанавливаем аргумент по умолчанию здесь это 2
function calcORDouble(number, basic = 2) {
  console.log(number * basic);
}

calcORDouble(8);