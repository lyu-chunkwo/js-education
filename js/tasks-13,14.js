'use strict';

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(singleShop => {
    square = square + singleShop.width * singleShop.length;
  });


  volume = data.height * square;

  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
    return 'Бюджета достаточно';
  } else {
    return 'Бюджета недостаточно';
  }
}

console.log(isBudgetEnough(shoppingMallData));



const repairFlat = {
  rooms: [
    {
      width: 10,
      length: 6
    },
    {
      width: 10,
      length: 6
    },
    {
      width: 10,
      length: 6
    },
    {
      width: 10,
      length: 6
    }
  ],
  height: 3,
  pricePerMeter: 25,
  budget: 18000
};

function budgetRepairFlat(argFromObj) {
  let square = 0;
  let volume = 0;

  argFromObj.rooms.forEach(argument => {
    square = square + argument.width * argument.length;
  });

  volume = volume + square * argFromObj.height;

  if (argFromObj.budget - (volume * argFromObj.pricePerMeter) >= 0) {
    return "Достаточно средств";
  } else {
    return 'Средств недостаточно';
  }
}

console.log(budgetRepairFlat(repairFlat));



// !2222222222222222222222222222222222222222222222222222222222222222222

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takeshi', 'Sam', 'Julia'];

function sortStudentsByGroups(argument) {
  argument.sort();

  const a = [], b = [], c = [], rest = [];

  for (let i = 0; i < argument.length; i++) {
    if (i < 3) {
      a.push(argument[i]);
    } else if (i < 6) {
      b.push(argument[i]);
    } else if (i < 9) {
      c.push(argument[i]);
    } else {
      rest.push(argument[i]);
    }
  }
  return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];

}

console.log(sortStudentsByGroups(students));


const animals = ['dog', 'cat', 'mouse', 'rat', 'kow', 'tiger', 'elephant', 'lion', 'crocodile', 'eagle', 'fox'];

function animalSort(argument) {
  argument.sort();

  const a = [], b = [], c = [], other = [];

  for (let i = 0; i < argument.length; i++) {
    if (i < 3) {
      a.push(argument[i]);
    } else if (i < 6) {
      b.push(argument[i]);
    } else if (i < 9) {
      c.push(argument[i]);
    } else {
      other.push(argument[i]);
    }
  }

  return [a, b, c, `Оставшиеся животные ${other.length === 0 ? '-' : other.join(', ')}`];
}

console.log(animalSort(animals));


const food = ['Плов', 'Лагман', 'Манты', 'Суп', 'Борщ', 'Омлет', 'Запеканка', 'Яичница', 'Гуляш', 'Окрошка', 'Жаркое'];

function foodSort(argument) {
  argument.sort();

  const a = [], b = [], c = [], rest = [];

  for (let i = 0; i < argument.length; i++) {
    if (i < 3) {
      a.push(argument[i]);
    } else if (i < 6) {
      b.push(argument[i]);
    } else if (i < 9) {
      c.push(argument[i]);
    } else {
      rest.push(argument[i]);
    }
  }
  return [a, b, c, `Оставшиеся блюда ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(foodSort(food));