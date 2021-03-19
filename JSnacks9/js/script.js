$(function(){

    var listaBici =[
        {
            nome: "Atala",
            peso: 4000
        },
        {
            nome: "Merida",
            peso: 5500
        },
        {
            nome: "Cannodale",
            peso: 2000
        }
    ];


    var biciLeggera = listaBici[0];

    console.log("Lista bici:\n")
    for (let key in listaBici) {
        console.log("Nome: " + listaBici[key].nome + "\nPeso: " + listaBici[key].peso)
        if( listaBici[key].peso < biciLeggera.peso){
            biciLeggera = listaBici[key];
        }
    }

    console.log("\n\nLa bici con il peso minore e' --> " + biciLeggera.nome + " con un peso di " + biciLeggera.peso);

});



