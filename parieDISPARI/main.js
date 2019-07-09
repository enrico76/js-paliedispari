// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.

// funzione che restituisce se un numero è pari o dispari
function paridispari (number) {
   if((num1 + num2) % 2 === 0){
      return "pari";
   } else {
      return "dispari";
   }
}

function random5 (num) {
   var risultato = Math.floor((Math.random() * num) + 1);

   return risultato;
}
// var numutente = parseInt(prompt("inserisci un numero"));
var num1 = random5 (5);
var num2 = random5 (5);

console.log(num1, num2);
var sceltapd = prompt("scegli pari o dispari");
console.log(sceltapd);
var risultatoparita = paridispari (5);
console.log(risultatoparita);

if (sceltapd == risultatoparita) {
  document.getElementById('my_id').innerHTML = "ha vinto il pari";
} else {
  document.getElementById('my_id').innerHTML = "ha vinto il dispari";
}
// var risultatoparita = paridispari(numutente);
//
