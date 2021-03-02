var parola1 = prompt("Inserire la prima parola");
var parola2 = prompt("Inserire la seconda parola");


if( parola1.length > parola2.length){
    alert(parola2 + "\n" + parola1);
}
else if(parola1.length < parola2.length){
    alert(parola1 + "\n" + parola2);
}
else{
        alert("Le parole sono lunghe uguali");
}