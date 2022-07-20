'use strict';

let results = '';
const amount = 7;

for (let i = 1; i < amount; i++) {

  for (let j = 0; j < i; j++) {
    results += '*';
  }

  results += '\n';
}

console.log(results);


first: for (let i = 1; i < 5; i++) {
  console.log(`First level ${i} iteration`);
  for (let j = 1; j < 5; j++) {
    console.log(`Second level ${j} iteration`);
    for (let k = 1; k < 5; k++) {
      if (k === 3) {
        break first;
      }
      console.log(`Third level ${k} iteration`);
    }
  }
}

for (let i = 5; i <= 10; i++) {
  console.log(i);
}

for (let i = 20; i >= 10; i--) {
  if (i == 13) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

let array = [];

for (let i = 5; i <= 10; i++) {
  array[i - 5] = i;
}
console.log(array);


let arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];

}
console.log(result);


let data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
  if (typeof (data[i]) === 'number') {
    data[i] *= 2;
  } else if (typeof (data[i]) === 'string') {
    data[i] = `${data[i]} - done`;
  }
}
console.log(data);


let data2 = [5, 10, 'Shopping', 20, 'Homework'];
let result2 = [];

for (let i = 1; i <= data2.length; i++) {
  result2[i - 1] = data2[data2.length - i];
}

console.log(result2);


const lines = 5;
let result3 = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result3 += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result3 += "*";
  }
  result3 += "\n";
}

console.log(result3);