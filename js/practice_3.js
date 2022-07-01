"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '').trim,
      b = prompt('На сколько оцените его?', '').trim;

    if (a != null && b != null && a != '' && b != '' && a.length < 10) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено очень мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Error');
  }
}

// detectPersonalLevel();

function showMyDB(a) {
  if (!a) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);


function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    // ! Для переменной i -1 используется для того что-бы запись в массив начиналась с 0
  }
}

// writeYouGenres();