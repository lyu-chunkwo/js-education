'use strict';

const btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay'),
  btns = document.querySelectorAll('button');

// todo Когда мы записываем выполнение событий таким образом, то значение переменной в итоге будет переопределено и мы получим выполнение только последнего скрипта
btn.onclick = function () {
  alert('click');
};

btn.onclick = function () {
  alert('second click');
};

// todo Для того чтобы значение переменной не переопределялось в ходе выполнения кода, события нужно поместить в структуру addEventListener (слушатель), в этом случае функции выполняются одна за одной не переопределяя значение переменной.
btn.addEventListener('click', function () {
  alert('click');
});

btn.addEventListener('click', function () {
  alert('second click');
});



btns[1].addEventListener('click', function (event) {
  console.log(event.target);
  event.target.remove();
  console.log('remove');
});



// todo Слушаем события click затем после трёх итераций удаляем

let i = 0;

const deleteEvent = function (event) {
  console.log(event.target);
  i++;
  if (i == 3) {
    btns[2].removeEventListener('click', deleteEvent);
  }
};

btns[2].addEventListener('click', deleteEvent); // ! После того как выполнится событие click запустится функция deleteEvent (второй аргумент это ссылка на функцию)


// todo Если мы хотим навесить событие для всех элементов у родителя, нужно использовать перебор forEach (так как мы получаем массив, а массив не имеет событий)

btns.forEach(btn => {
  btn.addEventListener('click', deleteEvent, { once: true }); // ! третий аргумент объект {once: true} означает, что событие нужно использовать только один раз
});


// todo Всплытие событий. Сначала событие происходит во вложенном элементе, затем в родительском

let k = 0;

const deleteEvents = function (event) {
  console.log(event.currentTarget); // ! Событие currentTarget отличается от target тем что содержит именно тот селектор в котором произошло событие
  k++;
  if (k == 3) {
    btns[3].removeEventListener('click', deleteEvents);
  }
};

btns[3].addEventListener('click', deleteEvents);
overlay.addEventListener('click', deleteEvents);


// todo Отмена стандартных действий для событий 

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
  event.preventDefault(); // ! Отменяет стандартное действие для события click

  console.log(event.target); // ! Теперь ссылка не выполняет стандартное действие, а (например) выводит в консоль элемент который и является ссылкой
});