'use strict';

// todo Создаём класс
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // todo Создаём метод
  calcArea() {
    return this.height * this.width;
  }
}

// todo Создаём ещё один класс и прописываем свойство extends (наследование) от класса Rectangle
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    // ! Вызывает конструктор родителя в данном случае у класса Rectangle
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(10, 100);

const div = new ColoredRectangleWithText(25, 10, 'Hello, World!', 'red');
div.showMyProps();
console.log(div.calcArea());

console.log(square.calcArea());
console.log(long.calcArea());