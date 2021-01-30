// Функция, возвращающая случайное целое число из переданного диапазона включительно
const numbers = (min, max) => {
  if (min >= max) {
    return 'Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального';
  }
  else {
    if (min >= 0 && max >= 0) {
      return Math.trunc(Math.random() * max + 1);
    }
    return'Ошибка. Пожалуйста, введите число от 0 и больше';
  }
}
numbers(2, 8);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно


const coordinates = (firstCoordinate, secondCoordinate, lengthCoorinates) => {

  if (firstCoordinate >= secondCoordinate) {
    return 'Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального';
  }

  else {

    if (firstCoordinate >= 0 && secondCoordinate >= 0) {
      return (Math.random() * secondCoordinate + 1).toFixed(lengthCoorinates);
    }

    return 'Ошибка. Пожалуйста, введите число от 0 и больше';
  }
}

coordinates(0.8, 63, 3);
