'use strict';
console.log(" кінець шостої задачі ↑ ");  
console.log(" початок сьомої задачі ↓  ");

// 7. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const my = "My,";
const name = " name,";
const is = " is ";
let fullName = my + name + is + 'Viktor';
console.log(fullName);


// або 


let FullName = my + name + is;
console.log(FullName + 'Viktor' ,'< альтернативна версія');