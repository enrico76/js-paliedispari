// Una funzione per capire se la parola è palindroma;

// dichiarazione variabile


function palindrome(str) {
  // divido la stringa in un array
  var paroladivisa = str.split("");
  console.log(paroladivisa);
  // inverto l'array
  var inversearray = paroladivisa.reverse();
  console.log(inversearray);
  // riunisco l'array in una stringa
  var parolarevunita = inversearray.join("");
  console.log(parolarevunita);
  return parolarevunita;
}
// dichiarazione variabile per prompt richiesta
var parola = prompt("scrivi una parola");
// console.log(parola);
// esecuzione funzione con la parola inserita nel prompt
var verificaParola = palindrome(parola);
// console.log("la parola verificara è" + verificaParola);
// verifica conincidenza parola in uscita con quella inserita
if (parola === verificaParola) {
  document.getElementById('my_id').innerHTML = "la parola è palindroma";
}else {
  document.getElementById('my_id').innerHTML = "la parola non è palindroma";
}
