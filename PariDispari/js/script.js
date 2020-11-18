// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

function random(){
  var numeroRandom = Math.floor(Math.random() * (6 - 1) ) + 1;
  return numeroRandom;
}

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


var numeroPc = random();
console.log("Scelta PC: ", numeroPc);
var sceltaUtente = prompt("Pari o Dispari?");

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

var somma = numeroPc + numeroUtente;
console.log("Somma: ", somma);

var esito = pariDispari(somma, sceltaUtente);

if (esito){
  alert("Hai vinto!");
} else{
  alert("Hai perso!")
}
