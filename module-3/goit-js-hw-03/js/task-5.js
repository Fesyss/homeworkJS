'use strict';
console.log(`Початок п'ятої задачі ⬇`)

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (const value in arr[i]) {
      if (value === prop) {
        result.push(arr[i][value]);
      }
    }
  }
  return result;
}

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []



console.log(`кінець п'ятої задачі ⬆ `)