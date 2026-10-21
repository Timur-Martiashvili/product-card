import { comments } from './comments.js';
// 2) Создал массив чисел от 1 до 10. Отфильтровал его и получил массив чисел, начиная с 5
const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const age = ages.filter(item => item >= 5);

// 3) Создал массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверил, есть ли в массиве какая-то определенная сущность.
const cars = ["bmw", "mers", "audi"];
console.log(cars.includes("Geely"));

// 4) Написал функцию, которая аргументом принимает массив и изменяет его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернул.
function turnsOver(array) {
  array.reverse();
}

turnsOver(ages);
turnsOver(cars);

// 5) Добавил файл comments.js, в нём создал константу и в него поместил первые 10 объектов этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу.
// 6) Сделал константу экспортируемой, добавив перед "const" ключевое слово "export".
// 7) Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsWithCom = comments.filter(item => item.email.includes(".com"));
console.log(commentsWithCom);

// 8) Перебрал массив таким образом, что  пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
comments.forEach(function(item) {
  if (item.id <= 5) {
    item.postId = 2;
  } else {
    item.postId = 1;
  }
});
//9 Перебрал массив, что бы объекты состояли только из айди и имени
const commentsInfo = comments.map(function(item) {
  return {
    name: item.name,
    id: item.id,
  };
});
//10)Перебрал массив, добавил объектам свойство isInvalid и проверил: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const newComments = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(newComments);
console.log(comments);
//11) Почитал про метод массива reduce. Используя его, вывелмассив почт и провернул тоже самое с помощью метода map
comments.reduce(function(acc, comment) {
    acc.push(comment.email);
    return acc;
}, []);

comments.map(function(comment) {
    return comment.email;
});

//12)Почитал про методы toString(), join() и перебрав массив с задания №11, привеk его к строке.
const emails = comments.map(function(comment) {
    return comment.email;
});

emails.join(" - ");