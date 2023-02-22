Descrizione:
Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

-----------------

// Chiedo all'utente i km che vuole percorrere e li salvo nella variabile userKm

// Chiedo all'utente l'età e la salvo nella variabile userAge

// Definisco la variabile priceKm = 0.21

// Definisco la variabile message

// Definisco la variabile price con il calcolo del prezzo

// Calcolo il prezzo con lo sconto e definisco messaggi diversi: 
    SE (userAge < 18) {message = 'Prezzo con sconto minorenne'; price = price * 0.8;} 
    ALTRIMENTI SE (userAge > 65) {message = 'Prezzo con sconto over'; price = price * 0.6;}

// Definisco la variabile finalPrice con il prezzo in forma umana
