"use strict";

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
//   }
// }

// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов Вы уже просмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Error');
    }
  },
  showMyDB: function (a) {
    if (!a) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYouGenres: function () {
    for (let i = 1; i < 2; i++) { // ! убираем знак равно
      // for (let i = 1; i <= 3; i++) {

      // todo Метод с помощью условий if else
      // let genres = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genres === '' || genres == null) {
      //   console.log('Вы ввели некорректные данные');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genres;  // ! Для переменной i -1 используется для того что-бы запись в массив начиналась с 0
      // }

      // todo  Другой способ при помощи метода spread

      let genres = prompt(`Ведите Ваши любимые жанры через запятую`);

      if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
      }
    }




    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i + 1} - это ${item}`);
    });
  }
};
