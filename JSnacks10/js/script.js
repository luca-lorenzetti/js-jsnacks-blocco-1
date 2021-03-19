$(function(){
    var squadre = [
        {
            nome: "Milan",
            punti: 0,
            falliSubiti: 0
        },    {
            nome: "Inter",
            punti: 0,
            falliSubiti: 0
        },    {
            nome: "Juventus",
            punti: 0,
            falliSubiti: 0
        },    {
            nome: "Roma",
            punti: 0,
            falliSubiti: 0
        },    {
            nome: "Lazio",
            punti: 0,
            falliSubiti: 0
        }
    ]

    // 2 step:
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = genRandom();
        squadre[i].falliSubiti = genRandom();
    }


    // 3 step:

    var arrFinal = [];

    for (let i = 0; i < squadre.length; i++) {
        arrFinal.push({nome: squadre[i].nome, falliSubiti: squadre[i].falliSubiti})
    }

    console.log(arrFinal);

    function genRandom(){
        return Math.floor(Math.random()*90+1);
    }
});