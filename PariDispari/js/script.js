// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// FUNZIONE NUMERO RANDOM PC
function random(){

  var numeroRandom = Math.floor(Math.random() * (6 - 1) ) + 1;
  return numeroRandom;

}

// FUNZIONE PARI O DISPARI TRUE VITTORIA FALSE SCONFITTA
function pariDispari(numero, scelta){

  var risultato;
  if(numero % 2 == 0){
    if(scelta == "Pari"){
      risultato = true;
    } else{
      risultato = false;
    }
  } else if(numero % 2 == 1){
    if(scelta == "Dispari"){
      risultato = true;
    } else {
      risultato = false;
    }
  }
  return risultato;

}

// NUMERO PC APPLICANDO FUNZIONE RANDOM
var numeroPc = random();
console.log("Scelta PC: ", numeroPc);

// PARI O DISPARI UTENTE
var sceltaUtente = prompt("Pari o Dispari?");

// CONTROLLO SCELTA VUOTA INIZIALE
while(sceltaUtente == ""){

  sceltaUtente = prompt("Devi scrivere pari o dispari!");

}
// TRASFORMO TUTTE LE LETTERE IN MINUSCOLO E POI LA PRIMA IN MAIUSCOLO
sceltaUtente = sceltaUtente.toLowerCase();
var i = 0;
sceltaUtente = sceltaUtente[i].toUpperCase() + sceltaUtente.substring(i + 1);

// FACCIO TORNARE IL PROMPT SE LA SCELTA E' DIVERSA DA PARI O DISPARI
while(sceltaUtente != "Pari" && sceltaUtente != "Dispari") {

  sceltaUtente = prompt("Devi scrivere pari o dispari!");

  // CONTROLLO SCELTA VUOTA DOPO SCELTA NON VUOTA DIVERSA DA PARI E DISPARI
  while(sceltaUtente == ""){

    sceltaUtente = prompt("Devi scrivere pari o dispari!");

  }

  // TRASFORMO TUTTE LE LETTERE IN MINUSCOLO E POI LA PRIMA IN MAIUSCOLO DOPO PRIMA SCELTA NON VALIDA
  sceltaUtente = sceltaUtente.toLowerCase();
  var i = 0;
  sceltaUtente = sceltaUtente[i].toUpperCase() + sceltaUtente.substring(i + 1);

}

console.log(sceltaUtente);
document.getElementById("scelta-utente").innerHTML = "Hai scelto: " + "<span>" + sceltaUtente + "</span>";

// NUMERO UTENTE
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// FACCIO TORNARE IL PROMPT SE SCRIVO UNA STRINGA O SE IL NUMERO E' MAGGIORE DI 5 O MINORE DI 4
while(isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1){
  numeroUtente = parseInt(prompt("Devi inserire un numero tra 1 e 5!"))
}

document.getElementById("numero-utente").innerHTML = "Hai scelto il numero: " + "<span>" + numeroUtente + "</span>";
document.getElementById("numero-pc").innerHTML = "Il Pc ha scelto il numero: " + "<span>" + numeroPc + "</span>";

// SOMMA NUMERO UTENTE E NUMERO PC
var somma = numeroPc + numeroUtente;
console.log("Somma: ", somma);
document.getElementById("somma").innerHTML = "La somma è: " + "<span>" + somma + "</span>";

// ESITO APPLICANDO LA FUNZIONE PARIDISPARI
var esito = pariDispari(somma, sceltaUtente);

if (esito){
  document.getElementById("answer").innerHTML = somma + " è pari. " + "<span class='green'>" + "Hai vinto!" + "</span>";
} else{
  document.getElementById("answer").innerHTML = somma + " è dispari. " + "<span class='red'>" + "Hai perso!" + "</span>";
}
