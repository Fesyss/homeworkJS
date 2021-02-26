'use strict';
// 4. const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль.
const message = 'Welcome to Ukraine!';
const messageArr = message.split("");
console.log(messageArr);
console.log(message.indexOf("l"));
const messageString = messageArr.join('');
console.log(messageString);