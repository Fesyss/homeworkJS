'use strict';
console.log(' кінець третьої задачі ↑ ');  
console.log(' початок четвертої задачі ↓  '); 

// 4. Є змінна name ( name = ’ ’ ). Через prompt ви вводите ім’я свого улюбленого героя. Виводити кожне ім’я героя, поки кількість літер буде менша 6. Наприклад, Ivan - виводити, Paradi -не виводити і завершити.
let name = ' ';
do {
    name = prompt('Введіть імя героя:');
  } while (name.length < 6);
    console.log(name);