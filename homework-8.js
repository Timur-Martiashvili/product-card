// 3) Создан объект на основе моих данных.
const user = {
  name: "Timur",
  surname: "Martiashvili",
  mail: "tmuslim1199@gmail.com",
  relationshipStatus: "married",
  city: "Moscow",
  age: 28,
  profession: "roofer",
  religion: "Muslim",
};

// 4) Создан объект, в котором хранятся данные об автомобиле.
// 4.1) Добавлено дополнительное свойство — владелец авто,
// значением которого является объект, описанный в пункте №3.
const car = {
  makeCar: "BMW",
  modelCar: "X6",
  yearOfManufacture: 2020,
  colorCar: "Black",
  boxView: "Auto",
};

car.carOwner = user;

// 5) Написал функцию, которая аргументом принимает объект,
// описанный в пункте №4. Она проверяет, есть ли в объекте
// свойство "максимальная скорость". Если нет — добавляет его
// и задает значение, если есть — ничего не делает.
function checkCar(car) {
  if (car.maximumSpeed === undefined) {
    car.maximumSpeed = "250 km/h";
  }
}

// 6) Написал функцию, которая получает первым аргументом объект,
// а вторым аргументом — свойство объекта, которое нужно вывести,
// и выводит его значение.
function showCar(car, property) {
  console.log(car[property]);
}

showCar(car, "colorCar");

// 7) Создал массив, который содержит названия продуктов.
const vegetables = ["cucumber", "tomato", "pumpkin"];

// 8) Создал массив, состоящий из объектов, где объект представляет
// собой книгу: название, автор, год выпуска, цвет обложки, жанр.
// После этого добавил еще одну книгу в конец списка.
const booksList = [
  {
    name: "Three Foundations",
    author: "Ibn Abdul Wahhab",
    yearOfPublication: 1740,
    genre: "religion",
    coverColor: "black",
  },
  {
    name: "Four Rules",
    author: "Ibn Abdul Wahhab",
    yearOfPublication: 1745,
    genre: "religion",
    coverColor: "white",
  },
  {
    name: "Kitab At Tauhid",
    author: "Ibn Abdul Wahhab",
    yearOfPublication: 1750,
    genre: "religion",
    coverColor: "grey",
  },
];

booksList.push({
  name: "Sahih Al Buhari",
  author: "Buhari",
  yearOfPublication: 1550,
  genre: "religion",
  coverColor: "green",
});

// 9) Создал еще один массив.
// С помощью оператора объединил два массива в один.
const booksIbnTaimia = [
  {
    name: "Majmoo al-fatawa",
    author: "Ibn Taymiyyah",
    yearOfPublication: 1720,
    genre: "religion",
    coverColor: "black",
  },
];

const allBooks = [...booksList, ...booksIbnTaimia];

// 10)
function setBooks(books) {
  return books.map(function(book) {
    book.isRare = book.yearOfPublication > 2000;
    return book;
  });
}

const rareBooks = setBooks(allBooks);