/*
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */

var arrNum = [10,30,2,1,3,5,7,100,1000,25,43,60];

var sum = 0;

for (var i = 0; i < arrNum.length; i++) {

    if( i%2 !=0 ){
        sum += arrNum[i];
    }
}

console.log("La somma dei numeri in posizione dispari e' " + sum);