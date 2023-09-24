import {
  risposta_esatta,
  testo,
  hint
} from './data.js';

let placeholder = document.getElementById("answer");
let popup = document.getElementById("aiuto-1");

// Recupera il valore corrente di wrongAttempts da localStorage
let wrongAttempts = parseInt(localStorage.getItem("wrongAttempts")) || 0;

// Aggiungi una variabile per tenere traccia del massimo numero di tentativi consentiti dopo il secondo errore
const maxRetriesAfterSecondError = 3; // Imposta il numero desiderato di tentativi

placeholder.placeholder = "Inserisci la tua risposta";

$("form").submit(function (event) {
  event.preventDefault();
  var answer = document.getElementById("answer").value.toLowerCase();
  var right_answer = risposta_esatta.ok[0];

  if (answer === right_answer) {
    window.location.href = './01.html';
    // Resetta il valore di wrongAttempts
    wrongAttempts = 0;
  } else {
    // Incrementa il contatore dei tentativi errati
    wrongAttempts++;

    // Verifica il valore del contatore per reindirizzare l'utente
    if (wrongAttempts === 1) {
      window.location.href = './02.html';
    } else if (wrongAttempts > 1 && wrongAttempts <= maxRetriesAfterSecondError) {
      // Consentire un numero specifico di tentativi dopo il secondo errore
      window.location.href = './03.html';
    } else {
      // Dopo il massimo numero di tentativi, reindirizza sempre a 03.html
      window.location.href = './03.html';
    }
  }

  // Salva il valore aggiornato di wrongAttempts in localStorage
  localStorage.setItem("wrongAttempts", wrongAttempts);
  console.log(wrongAttempts);

});
