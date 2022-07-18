'use strict';

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    const arr = [1, 2, 3, 4];
    console.log(arr); //! Возвращает содержимое метода sum
    // @ Контекст у методов объекта - сам объект
    console.log(this); // ! Возвращает всё, что содержит объект
  }
};

obj.sum();


// @ this в конструкторах и классах это новый экземпляр объекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log('Hello! ' + this.name);
  };
}

let ivan = new User('Ivan', 23);
console.log(ivan);


// @ Ручная привязка this: call, apply, bind

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'John'
};

sayName.call(user, ' Smith');
sayName.apply(user, [' Smith']);


function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(7));


// todo Использование this в коде

const btn = document.querySelector('.btn_3');

// ! Работает только с обычной (не стрелочной) функцией.
btn.addEventListener('click', function () {
  this.style.color = 'red';
});


// @ Ниже два почти одинаковых объекта
// ! Здесь используется обычная функция она вернёт undefined
const object1 = {
  num: 5,
  sayNumber: function () {
    const say = function () {
      console.log(this);
    };
    say();
  }
};

object1.sayNumber();

// ! Здесь используется стрелочная функция она вернёт запрашиваемое значение
// ! У стрелочной функции нет своего контекста вызова и она обращается к вышестоящей функции
const object2 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
      console.log(this.num);
    };
    say();
  }
};

object2.sayNumber();

// todo Три варианта записи для одинаковых функций
// ! Обычная запись
const calc = (a) => {
  return a * 2;
};

// ! Сокращённая запись
const calc2 = (a) => a * 2;

// ! Ещё более сокращённый вариант, работает только с одним аргументом
const calc3 = a => a * 2;

console.log(calc(8));
console.log(calc2(15));
console.log(calc3(1));