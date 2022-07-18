'use strict';


// ! В примере с примитивными типами данных мы работаем со значениями
let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);


// ! При работе с обЪектами мы передаём не само значение обЪекта а ссылку на него
const obj = {
  a: 5,
  b: 1
};

const copy = obj; // ! В этой переменной лежит не копия, а ссылка на переменную obj. Изменяя переменную copy, мы изменяем сам обЪект obj

copy.a = 10;

console.log(copy); // ! В итоге изменяются и copy и obj
console.log(obj);


// todo СОЗДАНИЕ ПОВЕРХНОСТНЫХ КОПИЙ ОБЪЕКТОВ

function copyOf(mainObj) {
  let objCopy = {}; // ! Создаём новую переменную

  let keys; // ! Переменную для перебора ключей можно создать вне цикла

  for (keys in mainObj) { // ! Перебираем все ключи переменной numbers
    objCopy[keys] = mainObj[keys]; // ! и записываем в переменную objCopy

  }
  return objCopy;
}

const numbers = { // ! Изменяемый объект
  a: 5,
  b: 1,
  c: {
    k: 6,
    j: 8
  }
};

const newNumbers = copyOf(numbers); // ! Передаём аргумент в функцию copyOf()

newNumbers.a = 10;

console.log(numbers); // ! Оригинальная переменная
console.log(newNumbers); // ! Клонированная переменная с измененными значениями


// todo СЛИЯНИЕ ДВУХ ОБЪЕКТОВ Object.assign()

const nums = {
  a: 5,
  b: 1,
  c: {
    k: 6,
    j: 8
  }
};

const add = { // ! Добавляемый объект
  d: 17,
  e: 20
};

const addObj = Object.assign(nums, add); // ! Передаём объект в который добавляем, и объект который добавляем

console.log(addObj); // ! В итоге получаем третий объект состоящий из двух предыдущих


// todo Можно изменять данные в объекте другим способом

const clone = Object.assign({}, add); // ! В переменной clone создаём пустой объект, и помещаем туда данные из переменной add

clone.d = 20; // ! Затем записывает туда новые данные

console.log(add);
console.log(clone);


// todo Ещё один способ скопировать массив

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'oiawoeifjo';

console.log(oldArray);
console.log(newArray);


//  todo ОПЕРАТОР Spread

const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook']; // ! В эту переменную будут записаны данные из предыдущих переменных и новые данные

console.log(internet);

// todo Если необходимо передать в функцию данные полученные в виде массива используем оператор Spread

function log(a, b, c) { // ! Функция не принимает массив
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7]; // ! Например получаем массив который нужно передать в функцию

log(...num); // ! Для этого воспользуемся оператором Spread

// todo Создание поверхностной копии массива и объекта, и её изменение при помощи оператора Spread

// ! Массив
const array2 = ['a', 'b'];
const newArray2 = [...array2]; // ! Создаём копию массива array2
newArray2[0] = 'c'; // ! Записываем новые данные в созданную копию newArray2
console.log(newArray2);


// ! Объект
const obj2 = {
  one: 1,
  two: 2
};

const newObj2 = { ...obj2 };

newObj2.one = 55;
console.log(newObj2);
