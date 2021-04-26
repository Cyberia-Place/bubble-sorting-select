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

// CREAR CARTA
function generateCard() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let letters = [
    "A",
    "1",
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

  for (let i = 0; i < nCards; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    let letter = letters[Math.floor(Math.random() * letters.length)];

    if (!arrayOfCards.includes([symbol, letter])) {
      arrayOfCards.push([symbol, letter]);
      arrayOfLetters.push(letter);

      if (symbol == "♦" || symbol == "♥") {
        document.querySelector(
          ".container"
        ).innerHTML += `<div class="card my-3 rounded cardpoker mx-2">
        <div class="card-body d-flex justify-content-between display-1">
          <div class="symbol align-self-start" style="color: red"><p>${symbol}</p></div>
          <div class="letter align-self-center" style="color: red"><p>${letter}</p></div>
          <div class="symbol align-self-end" style="color: red"><p>${symbol}</p></div>
        </div>
      </div>`;
      } else {
        document.querySelector(
          ".container"
        ).innerHTML += `<div class="card my-3 rounded cardpoker mx-2">
        <div class="card-body d-flex justify-content-between display-1">
          <div class="symbol align-self-start" style="color: black"><p>${symbol}</p></div>
          <div class="letter align-self-center" style="color: black"><p>${letter}</p></div>
          <div class="symbol align-self-end" style="color: black"><p>${symbol}</p></div>
        </div>
      </div>`;
      }
    }
  }
}

function sortCards() {
  // const bubbleSort = (arr) => {
  //     let wall = arr.length - 1; //we start the wall at the end of the array
  //     while (wall > 0) {
  //         let index = 0;
  //         while (index < wall) {
  //             //compare the adjacent positions, if the right one is bigger, we have to swap
  //             if (arr[index] > arr[index + 1]) {
  //                 let aux = arr[index];
  //                 arr[index] = arr[index + 1];
  //                 arr[index + 1] = aux;
  //             }
  //             index++;
  //         }
  //         wall--; //decrease the wall for optimization
  //     }
  //     return arr;
  // };
}

// BOTON PARA ORDENAR LAS CARTAS
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", sortCards);

// BOTON PARA MOSTRAR LAS CARTAS
var btn = document.getElementById("button2");
btn.addEventListener("click", generateCard);
