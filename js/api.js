//Доработайте модуль для отрисовки меток на карте так, чтобы в качестве данных использовались не случайно сгенерированные объекты, а те данные, которые вы загрузите с сервера.

fetch('https://22.javascript.pages.academy/keksobooking/data')
  then((response) => response.json())
  then((data) => {
    console.log(data)
  })
