var num = 0;
var array = [];

for (let i = 0; i < 6; i++) {

    num = parseInt(prompt(i+1+"\° numero: "));
    if( num%2 != 0){
        array.push(num);
    }
}

console.log(array);
