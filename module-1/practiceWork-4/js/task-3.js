'use strict';
console.log(' кінець другої задачі ↑ ');  
console.log(' початок третьої задачі ↓  '); 

// 3. Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// // Використовувати вбудований метод length.


const name = "Віктор".length;
const surName = "Сташко".length;

if ( name >4 && surName > 5 ){
    console.log(name+surName);
}else{
    alert('УПС');
}