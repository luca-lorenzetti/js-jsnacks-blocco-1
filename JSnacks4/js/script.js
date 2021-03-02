var lista = ["marco marchi","paolo paoloni","luca luconi","lucia lucianoni","francesca franchini","adelmo adelmini"];


var utente = prompt("Inserisci il tuo nome e cognome");
var invitato = false;

for (var i = 0; i < lista.length; i++) {
    if( utente == lista[i]){
        invitato = true;
    }
}

if(invitato){
    alert("Sei nella lista e potrai partecipare alla festa");
}
else{
    alert("Non sei nella lista non puoi partecipare");
}