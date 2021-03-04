/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/

var names = ["Luca","Marco","Francesca","Paola","Lucio","Lucia","Maria","Mario"];
var surnames = ["Franceschini","Rossi","Bianchi","Pedretti","Vernazza","Salsetti","Bernardini"];
var list = [];

for (var i = 0; i < 3; i++) {
    list.push(names[Math.floor(Math.random()*names.length)] + " " + surnames[Math.floor(Math.random()*surnames.length)]);
    console.log(list[i]);
}

