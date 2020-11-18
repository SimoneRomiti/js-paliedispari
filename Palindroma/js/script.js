// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("Inserisci una parola");
// console.log(Math.ceil(sceltaUtente.length / 2));
// function palindroma(parola){
  var mezzo = Math.ceil(parola.length / 2);
  console.log("mezzo = ", mezzo);
  var i = 0;
  var j = parola.length - 1;
  var uguale = true;;
  while(i < mezzo && j >= mezzo - 1 && uguale){
    console.log("i = ", i);
    console.log("j = ", j);
    if(parola[i] == parola[j]) {
      i++;
      j--;
    } else{
      uguale = false;
    }

  }

  if(uguale){
    alert("palindroma");
  }else{
    alert("non palindroma");
  }
// }
