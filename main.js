// покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton= document.querySelector('#change-color-all-card')
const greenColorHash='#00ff00';
const blueCOlorHash='#0000FF'

changeColorAllCardButton.addEventListener('click',()=> {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash) 
})



// покраска первой карточки
const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click',() =>{
  firstProductCard.style.backgroundColor = blueCOlorHash;
})

const openGoogleButton = document.querySelector ('#open-google');
openGoogleButton.addEventListener('click',openGoogle ) 

function openGoogle () {
  const qustion = confirm ('Вы действительно хотите открыть Google?');

  if (qustion === true){
    window.open ('https://google.com')
  }
    else {return;
  }
}

// Вывод в console log

const outputLogButton = document.querySelector ('#outputConsoleLog');
outputLogButton.addEventListener('click',() => console.log(title.textContent)('ДЗ №4')) 

function outputConsoleLog (message) {
  alert (message)
  console.log(message)
}

// Вывод в консоль заголовка
const title = document.querySelector('h1');
title.addEventListener('mouseover', () => {console.log ( title.textContent); })

const button = document.querySelector ('#change-color-button');
button.addEventListener ('click',() => {
  button.classList.toggle ('change-color');
})
