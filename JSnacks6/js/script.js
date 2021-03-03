var num = parseInt(prompt("Vuoi calcolare i cubo di quanti numeri?") );

for (var i = 1; i <= num; i++) {
    console.log("Il cubo di " + i +" e': " + Math.pow(i,3) );    
}