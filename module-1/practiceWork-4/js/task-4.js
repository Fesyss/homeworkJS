'use strict';
console.log(' кінець третьої задачі ↑ ');  
console.log(' початок четвертої задачі ↓  '); 


// 4. Виберіть будь-яке число від 1 до 5 включно через функцію random. За допомогою if else визначіть, що це за число.

const random = Math.round(Math.random() * 4 + 1);
if (random === 1){
    console.log(" вам випало число 1")
}else if(random === 2){
    console.log(" вам випало число 2")
}else if (random ===3){
    console.log(" вам випало число 3")
}else if (random === 4){
    console.log(" вам випало число 4")
}else if(random === 5){
    console.log(" вам випало число 5")
}