/*
Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/
var num;
do{
    do{
        num = parseInt(prompt("Inserisci un numero"));
    }
    while( isNaN(num) )
}
while( num%2 != 0);

alert(num);