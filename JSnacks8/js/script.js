var num = prompt("Inserire un numero composto da quattro cifre");
var somma = 0;

for (var i = 0; i < num.length; i++) {

    somma += parseInt(num[i]);    
}
console.log("Somma di " + num + " e' " + somma);