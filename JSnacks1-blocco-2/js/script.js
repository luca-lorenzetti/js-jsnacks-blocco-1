/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

var num;
var sum = 0;


//  FOR VERSION

for (var i = 0; i < 5; i++) {
    do{
        num = parseInt(prompt("Inserisci il " + (i+1)+"\° numero"));
    }
    while( isNaN(num) );

    sum += num;
}
alert("(Versione FOR) La somma dei numeri inseriti e' " + sum);

// WHILE VERSION

i = 0;
sum = 0;

while( j < 5){
    do{
        num = parseInt(prompt("Inserisci il " + (i+1)+"\° numero"));
    }
    while( isNaN(num) );

    sum += num;
    i++
}

alert("(Versione WHILE) La somma dei numeri inseriti e' " + sum);