'use strict';

// Definisco le variabili button
const generateButton = document.getElementById('gen_button');
const resetButton = document.getElementById('reset_button');

// Definisco la variabile ticket section
const sectionTicket = document.getElementById('ticket-section');

// Definisco la variabile offer type
const offerType = document.getElementById('offer_type');
const passengerName = document.getElementById('passenger_name');
const ticketPrice = document.getElementById('price');
const carriageNumber = document.getElementById('carriage_number');
const cpCode = document.getElementById('cp_code');


// Definisco la variabile con il prezzo al km
const priceKm = 0.21;

// Definisco le variabili per gli input nome, eta e km
let inputName = document.getElementById('input_name');
let inputAge = document.getElementById("input_age");
let inputKm = document.getElementById("input_km");

// Definisco le variabili X Y per i numeri random
const x = Math.floor((Math.random() * 9) + 1);
const y = Math.floor((Math.random() * 99999) + 10000);

// Evento onclick del generate button
generateButton.addEventListener('click', 
    function() {

        // Salvo i valori degli input nelle variabili
        inputAge = inputAge.value;
        inputKm = Number(inputKm.value);
        inputName = inputName.value;

        // Definisco una variabile con il calcolo del prezzo del biglietto senza sconto
        let price = priceKm * inputKm;

        // Calcolo lo sconto e lo applico alla variabile price
        if(inputAge === 'underage') {
            
            price = price * 0.8;
            offerType.innerHTML = 'Biglietto minorenne'
            
        } else if (inputAge === 'over') {

            price = price * 0.6;
            offerType.innerHTML = 'Biglietto over 65'
        } else {
            offerType.innerHTML = 'Biglietto standard'
        }

        // Stampo il prezzo finale in forma umana in console
        console.log(`€ ${price.toFixed(2)}`);

        // Stampo nome passeggero, prezzo, carrozza e codice cp del biglietto sulla pagina
        passengerName.innerHTML = inputName;
        ticketPrice.innerHTML = `€ ${price.toFixed(2)}`;
        carriageNumber.innerHTML = x;
        cpCode.innerHTML = y;

        // Aggiungo (toggle) una classe per far apparire la section biglietto
        sectionTicket.classList.toggle('show');
});

// Evento onclick del reset button (per far scomparire la section biglietto)
resetButton.addEventListener('click', 
    function () {
    sectionTicket.classList.remove('show');
});
