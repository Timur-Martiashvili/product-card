console.log("Homework 7 работает");
function showWeather(city,temperature){
console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
showWeather("Москва",25)

const speedOfLight = 299792458;
function checkSpeed(speed){
  if (speed>speedOfLight){
    console.log("Сверхсветовая скорость")
  }
  else if(speed===speedOfLight){
    console.log("Скорость света")
  }
  else {
    console.log("Субсветовая скорость")
  }
  }
  checkSpeed(399792458);
  checkSpeed(299792458);
  checkSpeed(199792458);

const product="телефон";
const productPrice=10000; 
function buyProduct(budget){
if (budget>productPrice){
console.log(`${product} приобретен. Спасибо за покупку!`)
}
else {
  console.log(`Вам не хватает ${productPrice-budget}, пополните баланс`)
}
}
buyProduct(3090);

function timePrayer(time){
console.log(`${time} молитвы`)
}
timePrayer("20:30");

const name="Timur"; 
const age=28; 
const city="Moscow";


