var num = 1;
var i = 1;

for(var i = 1; num < 1000; i++){
    console.log(num);
    num = parseInt(Math.pow(2, i));
}