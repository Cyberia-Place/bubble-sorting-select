/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// BOTON PARA ENVIAR EL INPUT
var nCards = 0;
var btn1 = document.getElementById("button1");
btn1.addEventListener("click", () => {
  nCards = document.getElementById("input").value;
});

/* Un array de arrays, cada array interno consta de un par de valores. 
El primero contiene la carta, el segundo su letra. */
var arr = [];

// CREAR CARTA
function generateCard() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let letters = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  document.querySelector(".container").innerHTML = "";
  let arrayOfCards = [];
  arr = [];

  for (let i = 0; i < nCards; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    let letter = letters[Math.floor(Math.random() * letters.length)];

    if (!arrayOfCards.includes([symbol, letter])) {
      arrayOfCards.push([symbol, letter]);

      let card = "";
      if (symbol == "♦" || symbol == "♥") {
        card = `<div class="card my-3 rounded cardpoker mx-2">
        <div class="card-body d-flex justify-content-between display-1">
          <div class="symbol align-self-start" style="color: red"><p>${symbol}</p></div>
          <div class="letter align-self-center" style="color: red"><p>${letter}</p></div>
          <div class="symbol align-self-end" style="color: red"><p>${symbol}</p></div>
        </div>
      </div>`;

        document.querySelector(".container").innerHTML += card;
      } else {
        card = `<div class="card my-3 rounded cardpoker mx-2">
        <div class="card-body d-flex justify-content-between display-1">
          <div class="symbol align-self-start" style="color: black"><p>${symbol}</p></div>
          <div class="letter align-self-center" style="color: black"><p>${letter}</p></div>
          <div class="symbol align-self-end" style="color: black"><p>${symbol}</p></div>
        </div>
      </div>`;

        document.querySelector(".container").innerHTML += card;
      }

      if ((letter = "J")) {
        letter = "11";
        arr.push([card, letter]);
      } else if ((letter = "Q")) {
        letter = "12";
        arr.push([card, letter]);
      } else if ((letter = "Q")) {
        letter = "13";
        arr.push([card, letter]);
      } else if ((letter = "A")) {
        letter = "1";
        arr.push([card, letter]);
      } else {
        arr.push([card, letter]);
      }
      console.log(arr);
    }
  }
}

let bubbleSort = () => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index][0] > arr[index + 1][0]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

console.log(bubbleSort(arr));

function sortCards() {
  for (let i of bubbleSort(arr)) {
    console.log(i);
    document.querySelector(".container").innerHTML = i[0];
  }
}

// BOTON PARA ORDENAR LAS CARTAS
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", sortCards);

// BOTON PARA MOSTRAR LAS CARTAS
var btn = document.getElementById("button2");
btn.addEventListener("click", generateCard);
