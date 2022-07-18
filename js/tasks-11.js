'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda', 'John'];

function showFamily(arr) {
  let str = '';

  if (arr.length === 0) {
    str = 'Family is empty';
  } else {
    str = 'Family consists of: ';
  }

  // arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: '; // ! Сокращённый вариант

  arr.forEach(function (argument) {
    str = str + `${argument} `;
  });

  // arr.forEach(member => { // ! Сокращённый вариант
  //   str += `${member} `;
  // });

  return str;
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(array) {
  let str = '';
  array.forEach(argument => {
    str += `${argument.toLowerCase()}\n`;
  });

  return str;
}
console.log(standardizeStrings(favoriteCities));