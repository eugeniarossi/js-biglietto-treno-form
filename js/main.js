'use strict';

// Chiedo all'utente i km che vuole percorrere e li salvo nella variabile userKm
const userKm= Number(prompt('Inserisci i km che vuoi percorrere'));

// Chiedo all'utente l'età e la salvo nella variabile userAge
const userAge = Number(prompt('Inserisci la tua età'));

// Definisco la variabile priceKm = 0.21
const priceKm = 0.21;

// Definisco la variabile message
let message = 'Prezzo biglietto';

// Definisco la variabile price con il calcolo del prezzo
let price = priceKm * userKm;

// Calcolo il prezzo con lo sconto
if(userAge < 18) {
    message = 'Prezzo con sconto minorenne';
    price = price * 0.8;
    
} else if (userAge > 65) {
    message = 'Prezzo con sconto over';
    price = price * 0.6;
}

// Definisco la variabile finalPrice con il prezzo in forma umana
const finalPrice = price.toFixed(2);

// Mostro message e finalPrice in console
console.log(`${message}: ${finalPrice}€`);