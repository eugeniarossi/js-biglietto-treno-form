'use strict';

// Definisco la variabile button
const button = document.getElementById('form_button');

// Definisco la variabile con il prezzo al km
const priceKm = 0.21;

// Definisco le variabili per gli input eta e km
let inputAge;
let inputKm;

// Definisco la variabile price per il prezzo
let price;

// Evento click del button
button.addEventListener('click', 
    function() {
        
        // Salvo i valori degli input nelle variabili
        inputAge = Number(document.getElementById("input_age").value);
        inputKm = Number(document.getElementById("input_km").value);
        price = priceKm * inputKm;

        // Calcolo lo sconto e lo applico alla variabile price
        if(inputAge < 18) {
            
            price = price * 0.8;
            
        } else if (inputAge > 65) {

            price = price * 0.6;
            
        } 

        // Stampo il prezzo finale in forma umana in console
        console.log(`€ ${price.toFixed(2)}`);
});

