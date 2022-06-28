"use strict";

const numberOfFinms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFinms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done');
//   } else {
//     console.log('Error');
//     i--;
//   }
// }

let num = 0;

while (num < 2) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  num++;

  personalMovieDB.movies[a] = b;

}

// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено очень мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Error');
// }

console.log(personalMovieDB);