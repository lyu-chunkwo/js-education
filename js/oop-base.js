'use strict';

let str = 'some';
let strObj = new String(str); // ! Создавая новую строку - получаем объект

console.log(str);
console.log(strObj);
console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);


// todo Прототипы это объекты чьи свойства могут использовать другие объекты
const soldier = {
  health: 400,
  armor: 200,
  sayHello: function () {
    console.log('Hello!');
  }
};

// todo Способ СОЗДАНИЯ прототипа для объекта
const john = Object.create(soldier); // ! Создаём переменную johп и объявляем прототип для неё (прототипом является переменная soldier)

const leo = {
  health: 100
};

leo.__proto__ = soldier; // ! Устаревшее решение не нужно использовать

// todo Ещё один способ ПОЛУЧЕНИЕ прототипа
const peter = {
  health: 300
};

Object.setPrototypeOf(peter, soldier); // ! Создаём переменную peter и объявляем прототип для неё (прототипом является переменная soldier)


john.sayHello();
console.log(john);
console.log(`Health - ${john.health}\nArmor - ${john.armor}`); // ! Из переменной john обращаемся к прототипу soldier
console.log(leo.armor);
console.log(peter.armor);
console.log(leo);
console.log(peter);