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

-----------------
-----------------

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

-----------------

// Definisco la variabile button

// Definisco la variabile con il prezzo al km

// Definisco le variabili per gli input eta e km

// Definisco la variabile price per il prezzo

// Definisco l'evento click del button {
    // Salvo i valori degli input nelle variabili
    // Calcolo lo sconto e lo applico alla variabile price
}

// Stampo il prezzo finale (price) in forma umana in console
