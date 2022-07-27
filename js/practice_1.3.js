'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}

// start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log('personalMovieDB - is privat!');
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != '' && a != null && b != '' && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
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

detectPersonalLevel();