'use strict';

// Definisco le variabili button
const generateButton = document.getElementById('gen_button');
const resetButton = document.getElementById('reset_button');

// Definisco la variabile ticket section
const sectionTicket = document.getElementById('ticket-section');

// Definisco la variabile offer type
const offerType = document.getElementById('offer_type');

// Definisco la variabile con il prezzo al km
const priceKm = 0.21;

// Definisco le variabili per gli input nome, eta e km
let inputName;
let inputAge;
let inputKm;

// Definisco la variabile price per il prezzo
let price;

// Definisco le variabili X Y per i numeri random
let x = Math.floor((Math.random() * 9) + 1);
let y = Math.floor((Math.random() * 99999) + 1000);

// Evento onclick del generate button
generateButton.addEventListener('click', 
    function() {

        // Salvo i valori degli input nelle variabili
        inputAge = document.getElementById("input_age").value;
        inputKm = document.getElementById("input_km").value;
        inputName = document.getElementById('input_name').value;

        // Calcolo il prezzo senza sconto
        price = priceKm * inputKm;

        // Calcolo lo sconto e lo applico alla variabile price
        if(inputAge === 'minorenne') {
            
            price = price * 0.8;
            offerType.innerHTML = 'Biglietto minorenne'
            
        } else if (inputAge === 'over-65') {

            price = price * 0.6;
            offerType.innerHTML = 'Biglietto over 65'
        } else {
            offerType.innerHTML = 'Biglietto standard'
        }

        // Stampo il prezzo finale in forma umana in console
        console.log(`€ ${price.toFixed(2)}`);

        // Stampo nome passeggero, prezzo, carrozza e codice cp del biglietto sulla pagina
        document.getElementById('passenger_name').innerHTML = inputName;
        document.getElementById('price').innerHTML = price.toFixed(2);
        document.getElementById('carriage_number').innerHTML = x;
        document.getElementById('cp_code').innerHTML = y;

        // Aggiungo (toggle) una classe per far apparire la section biglietto
        sectionTicket.classList.toggle('show');

        // Evento onclick del reset button (per far scomparire la section biglietto)
        resetButton.addEventListener('click', 
            function () {
            sectionTicket.classList.remove('show');
        });
});



