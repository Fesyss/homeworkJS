'use strict';
// 2. Напишіть скрипт, який рахує суму усіх зарплат і зберігає результат у змінній sum. Результат виведіть в консоль. 
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
const values = Object.values(salaries);
for(const value of values){
    sum += value;
}
console.log(sum);
console.log("Кінець другого завдання");
