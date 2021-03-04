/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/
var arr1 = ["ciao",29,30,"nome","cognome"];
var arr2 = ["2","Pino",100];


console.log("Arr1 misura " + arr1.length + " elementi");
console.log("Arr2 misura " + arr2.length + " elementi");

do{
    if( arr1 < arr2){
        arr1.push(Math.floor(Math.random()*100)); 
    }

    else{
        arr2.push(Math.floor(Math.random()*100)); 

    }
}
while( arr1.length != arr2.length)



console.log("Ora arr1 misura " + arr1.length + " elementi");
console.log("Ora arr2 misura " + arr2.length + " elementi");
