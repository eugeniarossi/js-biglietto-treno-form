'use strict';

// Definisco la variabile button
const genButton = document.getElementById('gen_button');
const resetButton = document.getElementById('reset_button');

// Definisco la variabile con il prezzo al km
const priceKm = 0.21;

// Definisco le variabili per gli input nome, eta e km
let inputName;
let inputAge;
let inputKm;

// Definisco la variabile price per il prezzo
let price;

const sectionTicket = document.getElementById('ticket-section');

// Evento click del button
genButton.addEventListener('click', 
    function() {

        // Salvo i valori degli input nelle variabili
        inputAge = document.getElementById("input_age").value;
        inputKm = Number(document.getElementById("input_km").value);
        inputName = document.getElementById('input_name').value;
        price = priceKm * inputKm;

        // Calcolo lo sconto e lo applico alla variabile price
        if(inputAge === 'minorenne') {
            
            price = price * 0.8;
            
        } else if (inputAge === 'over-65') {

            price = price * 0.6;
        } 

        // Stampo il prezzo finale in forma umana in console
        console.log(`€ ${price.toFixed(2)}`);

        // Stampo nome passeggero e prezzo del biglietto sulla pagina
        document.getElementById('passenger_name').innerHTML = inputName;
        document.getElementById('price').innerHTML = price.toFixed(2);

        // Aggiungo (toggle) una classe per fa apparire la section biglietto
        sectionTicket.classList.toggle('show');
});

resetButton.addEventListener('click', 
    function () {
        sectionTicket.classList.remove('show');
})
