"use strict";


const numberOfFinms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFinms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);