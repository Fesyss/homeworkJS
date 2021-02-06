'use strict';
console.log(' кінець четвертої задачі ↑ ');  
console.log(" початок п'ятої задачі ↓  ");

// 5. Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи в консоль назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

 const lang = prompt('Введіть мову: en , fr , ua , ru');
 switch(lang ){
   case "en": console.log("January");break;
   case "fr": console.log("Janvier");break;
   case "ua": console.log("Січень");break;
   case "ru": console.log("Январь");break;
 }