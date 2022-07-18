/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Одержимость",
    "Логан",
    "Ла-ла лэнд",
    "Лига справедливости",
    "Скотт Пилигрим против..."
  ]
};

const adv = document.querySelectorAll('.promo__adv img'),
  promoBg = document.querySelector('.promo__bg'),
  genre = promoBg.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list'),
  formAdd = document.querySelector('.add'),
  promoTitle = document.querySelector('.promo__title');
console.log(formAdd);

// todo Удаление рекламы
adv.forEach(item => {
  item.remove();
});

// todo Замена жанра
genre.textContent = 'драма'; // ! Заменяем жанр фильма

// todo Замена background-image
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// todo Фомирование и сортировка списка фильмов
movieList.innerHTML = ''; // ! Если в innerHTML оставить пустую строку, то всё её содержимое просто удалится

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
});
