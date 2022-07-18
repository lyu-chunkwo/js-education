// todo События touch
// * touchstart  Прикосновение одним пальцем к экрану
// * touchmove  Движение пальцем по экрану
// * touchend  Отрыв пальца от экрана
// * touchenter
// * touchleave
// * touchcancel
// * touches  Прикосновение к экрану несколькими пальцами
// * targetTouches

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('start');
    console.log(e.touches);
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log('Move');
    console.log(e.targetTouches[0].pageX); // ! В квадратных скобках обращаемся к пальцу (в данном случае к первому)
  });

  box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('End');
  });
});