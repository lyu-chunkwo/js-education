'use strict';

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
  console.log(num);
  num++;
}

// ! Прерывание итерации
for (let i = 0; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}

// ! Пропускаем один шаг в итерации
for (let i = 0; i <= 10; i++) {
  if (i === 8) {
    continue;
  }
  console.log(i);
}

// ! ЦИКЛЫ ВНУТРИ ЦИКЛА!!!!!!!!!!!!!!!!!!!

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j <= 7; j++) {
    console.log(j);
  }
}


// ! Использование меток во вложенных циклах!!!!!!!!!

first: for (let i = 0; i < 3; i++) { // ! first: означает метка(можно использовать любое слово)
  console.log(`first level: ${i}`);
  for (let j = 0; j <= 7; j++) {
    console.log(`second level: ${j}`);
    for (let k = 0; k <= 7; k++) {
      if (k === 5) continue first; // ! Применение метки
      console.log(`third level: ${k}`);
    }
  }
}

// ! Использование цикла для построения пирамидки

let result = '';
const length = 20;

for (let i = 1; i < length; i++) {

  for (let j = 0; j < i; j++) {
    result += '*'; // ! Оператор += означает сложение с присваиванием-как закомментированный пример ниже
    // result = result + '*';
  }

  result += '\n'; // ! \n означает перенос строки, то-есть в конце каждой итерации добавляется перенос строки
}

console.log(result);


for (let i = 5; i < 11; i++) {
  console.log(i);
}

for (let i = 20; i > 11; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


//  ! Одна задача выполненная двумя способами
// todooooooooooooooooooooooooooooooooooooooo
for (let i = 0; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}
// todooooooooooooooooooooooooooooooooooooooooo

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}

let numb = 5;
while (numb <= 10) {
  console.log(numb);
  numb++;
}

for (let i = 20; i > 10; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


let arr = [4, 8, 20, 35, 57];
let results = [];

for (let i = 0; i < arr.length; i++) {
  results[i] = arr[i];
}
console.log(results);


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {

  if (typeof (data[i]) === 'number') {

    data[i] = data[i] * 2;

  } else if (typeof (data[i]) === 'string') {

    data[i] = `${data[i]} - done`;

  }
}
console.log(data);


const date = [5, 10, 'Shopping', 20, 'Homework'];
const resalt = [];

for (let i = 1; i <= date.length; i++) {
  resalt[i - 1] = date[date.length - i];
}

console.log(resalt);