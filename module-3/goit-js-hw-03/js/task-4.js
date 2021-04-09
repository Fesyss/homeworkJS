'use strict';
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
console.log('Початок четвертої задачі ☟')

const countTotalSalary = function (employees) {
    let allMoney = 0;
    const values = Object.values(employees);
    for(const value of values){
        allMoney += value;
    }
    return allMoney
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
console.log('кінець четвертої задачі ☝ ')