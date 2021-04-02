'use strict';
// 3. Створіть об'єкт calculator з трьома методами:

// read(a, b) - запитує у користувача два числових значення і зберігає їх як властивості об'єкта.
// sum() - повертає суму збережених значень.
// mult() - повертає добуток збережених значень.

const calculator = {
   read(){
       const a = prompt('Введіть число');
       const b = prompt('Введіть число');
       this.num1 = +a;
       this.num2 = +b;
   },
   sum(){
       return this.num1 + this.num2
   },
   mult(){
       return this.num1 * this.num2
   }


};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mult());
console.log("Кінець третього завдання");