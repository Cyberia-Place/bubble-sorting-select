/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// BOTON PARA ENVIAR EL INPUT
var nCards = 0;
var input = document.getElementById("input");
input.addEventListener("change", () => {
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

  document.querySelector("#original").innerHTML = "";
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
        <div class="d-flex justify-content-between flex-column mx-2">
          <div class="symbol align-self-start" style="color: red">${symbol}</div>
          <div class="letter align-self-center" style="color: red">${letter}</div>
          <div class="symbol align-self-end" style="color: red">${symbol}</div>
        </div>
      </div>`;

        document.querySelector("#original").innerHTML += card;
      } else {
        card = `<div class="card my-3 rounded cardpoker mx-2">
        <div class="d-flex justify-content-between flex-column mx-2">
          <div class="symbol align-self-start" style="color: black">${symbol}</div>
          <div class="letter align-self-center" style="color: black">${letter}</div>
          <div class="symbol align-self-end" style="color: black">${symbol}</div>
        </div>
      </div>`;

        document.querySelector("#original").innerHTML += card;
      }

      if (letter == "J") {
        letter = "11";
        arr.push([card, letter]);
      } else if (letter == "Q") {
        letter = "12";
        arr.push([card, letter]);
      } else if (letter == "K") {
        letter = "13";
        arr.push([card, letter]);
      } else if (letter == "A") {
        letter = "1";
        arr.push([card, letter]);
      } else {
        arr.push([card, letter]);
      }
    }
  }
}

const selectSort = () => {
  let min = 0;
  document.querySelector("#bubble-log").innerHTML = ""; // Esto vacia y vuelve a rellenar el div donde va el bubble log
  let allCards = ""; // Donde voy a guardar el html de todas las cartas en cada iteracion para el bubble log
  let contador = 0; // Donde registro la cantidad de reordenamientos hechos
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (parseInt(arr[min][1]) > parseInt(arr[i][1])) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;

        for (let index of arr) {
          allCards += index[0];
        }
        document.querySelector(
          "#bubble-log"
        ).innerHTML += `<div class="d-flex justify-content-center"><h1>${contador}</h1>${allCards}</div>`;
        allCards = "";
        contador += 1;
      }
    }
    min++;
  }
};

// BOTON PARA ORDENAR LAS CARTAS
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", selectSort);

// BOTON PARA MOSTRAR LAS CARTAS
var btn = document.getElementById("button2");
btn.addEventListener("click", generateCard);
