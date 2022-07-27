'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != '' && a != null && b != '' && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }

  if (personalMovieDB.count <= 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Error');
  }
}

console.log(personalMovieDB);


function sayHello(name) {
  return `Привет, ${name}`;
}

console.log(sayHello('Alex!'));


function returnNeighboringNumbers(a) {

}