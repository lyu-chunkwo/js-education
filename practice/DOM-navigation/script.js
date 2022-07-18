'use strict';

console.log(document.body); // ! Обращение к body
console.log(document.head); // ! Обращение к head
console.log(document.documentElement); // ! Обращение к HTML
console.log(document.body.childNodes); // ! Обращение к потомкам body

// todo Так ка для childNodes нет свойства Element можно воспользоваться циклом for of

for (let iterator of document.body.childNodes) {
  if (iterator.nodeName == '#text') {
    continue;
  }
}


console.log(document.body.firstChild); // ! Обращение к превому потомку (узлу) body
console.log(document.body.lastChild); // ! Обращение к последнему потомку (узлу) body
console.log(document.body.firstElementChild); // ! Обращение к превому потомку (элементу) body
console.log(document.body.lastElementChild); // ! Обращение к последнему потомку (элементу) body

console.log(document.querySelector('#current').parentNode); // ! обращение к родителю (узлу) через потомка
console.log(document.querySelector('#current').parentNode.parentNode); // ! обращение к родителю (узлу) на уровень выше через потомка
console.log(document.querySelector('#current').parentElement); // ! обращение к родителю (элементу) через потомка
console.log(document.querySelector('#current').parentElement.parentElement); // ! обращение к родителю (элементу) на уровень выше через потомка

console.log(document.querySelector('[data-current="3"]').nextSibling); // ! получаем data атрибут, и через него обращаемся к следующему за ним узлу
console.log(document.querySelector('[data-current="3"]').previousSibling); // ! получаем data атрибут, и через него обращаемся к следующему за ним узлу

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // ! получаем data атрибут, и через него обращаемся к следующему за ним ЭЛЕМЕНТУ (не узлу)
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // ! получаем data атрибут, и через него обращаемся к следующему за ним ЭЛЕМЕНТУ(не узлу)