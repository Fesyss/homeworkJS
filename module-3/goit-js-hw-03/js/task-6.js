'use strict';
console.log(`Початок шостої задачі ⬇`)
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  for (let i = 0; i < allProdcuts.length; i++) {
    const product = allProdcuts[i];
    if (productName === product.name){
      return product.price * product.quantity ;
    }
  }
}
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
console.log(`кінець шостої задачі ⬆ `)