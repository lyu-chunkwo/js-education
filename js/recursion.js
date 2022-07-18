'use strict';

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));



let students = {
  js: [
    {
      name: 'John',
      progress: 100
    },
    {
      name: 'Ivan',
      progress: 60
    }
  ],

  html: {
    basic: [
      {
        name: 'Peter',
        progress: 20
      },
      {
        name: 'Ann',
        progress: 18
      }
    ],

    pro: [
      {
        name: 'Sam',
        progress: 10
      }
    ]
  }
};

// todo Функция расчёта пр помощи циклов

function gerTotalProgressByIterration(data) { // ! Получаем объект
  let total = 0;
  let students = 0;
  for (const iterator of Object.values(data)) { // ! Перебираем все полученные значения объекта (Object.values() возвращает все значения из объекта) и записываем всё содержимое в переменную iterator, в данном случае нам вернутся:
    // ! значение js это массив,
    // ! значение html это объект,
    // ! и значение php это массив.

    if (Array.isArray(iterator)) {// ! Проверяем переменную iterator на содержимое, в первой итерации попадаем на массив и совершаем следующие действия

      students += iterator.length; // ! В переменную students записываем длину массива

      for (let i = 0; i < iterator.length; i++) { // ! Пока длина переменной i меньше длины массива

        total += iterator[i].progress; // ! добавляем к переменной total значения содержащиеся в ключе progress
      }

    } else { // ! Во второй итерации попадаем на объект, и уже внутри него совершаем проверку на массив

      for (const iterator2 of Object.values(iterator)) { // ! На данный момент в переменной итератор лежит значение ключа html-то-есть объект, находим в нём массив, и дальше всё тоже самое

        students += iterator2.length;

        for (let i = 0; i < iterator2.length; i++) {

          total += iterator2[i].progress;
        }
      }
    }
  }
  return total / students;
}

// console.log(gerTotalProgressByIterration(students));


// todo Та же функция но с помощью рекурсии

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);

      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);