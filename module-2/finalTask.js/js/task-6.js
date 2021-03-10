'use strict';
let input;
const numbers = [];
let total = 0;
while(true){
    input = prompt("Введіть число :")
    if( input === null ){
        break; 
    }
    input =  Number(input);
    if ( Number.isNaN(input)){
        alert("Ви ввели не число, попробуйте ще раз");
    }else{
        numbers.push(input);
    }
}
for(const number of numbers){
    total += number;
    console.log(total);
}
console.log(`Загальна сума чисел дорівнює ${total}`);