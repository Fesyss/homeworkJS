'use strict';
console.log('Початок третьої задачі ☟')
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = function (employees) {
    const max = {
      name: null,
      work: -Infinity,
    };
    for (let employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        if (max.work < employees[employee]) {
          max.name = employee;
          max.work = employees[employee];
        }
      }
    }
    return max.name;
  };
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux

  console.log('кінець третьої задачі ☝ ')