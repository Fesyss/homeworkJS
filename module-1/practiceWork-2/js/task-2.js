'use strict';
//1

let name = prompt("Дайте  ім’я");
console.log( name  , "імя" );
let surname = prompt("Дайте свою фамілію");
console.log( surname , "фамілія");

//2

const myAge = 16;
const ageMyFriend = 15; 

alert(myAge+ageMyFriend);


//3
const a = 10;
const b = 20;
const ab = a * b;
console.log(ab);

//4

//  Створіть змінні a1, a2, a3, a4, a5 . За допомогою математичних операторів (додавання, віднімання і т.д.) знайдіть значення виразів: 5 + 3;  5 - 3;  
// 5 * 3;  5/3, помістивши результат кожного виразу в змінну. Наприклад, let a1 = 5 + 3. Вивести в консоль всі змінні по черзі.

let a1 = 5;
console.log(a1+3);
let a2 = 5;
console.log(a2-3);
let a3 = 5;
console.log(a3*3);
let a4 = 5;
console.log( a4/3);
let a5 = 5;
console.log(a5+3);
alert(a1);
alert(a2);
alert(a3);
alert(a4);
alert(a5);
//5

// . Створіть змінні a6, a7, a8, a9, a10. 
// Помістіть в них результат виразів: 5 % 3; 3 % 5; 5 + '3'; '5' - 3;  75 + 'кг' і виведіть на екран за допомогою alert по черзі всі змінні.

let a6 = 5;
console.log(a6%3);
let a7 = 3;
console.log(a7%5);
let a8 = 5;
console.log(a6+"3");
let a9 = "5";
console.log(a9-3);
let a10 = 75;
console.log(a10+"кг");
alert(a6);
alert(a7);
alert(a8);
alert(a9);
alert(a10);

// alert(`a1-${a1+3} a2-${a2-3} a3-${a3*3 } a4-${a4/3} a5-${a5+3} a6-${a6%3} a7-${a7%5} a8-${a8+"3"} a9-${a9-3} a10-${a10+"кг"}`)

//6

// Напишіть скрипт, який знаходить площу прямокутника. 
// Висота 23см. (заноситься в числову змінну height), шириною 10см (зберігаємо в числову змінну width),
//  значення площі повинно зберігається в числової змінної s.

let height = 23;
let width =  10;
let s = width*height;
console.log(`${s}-площа трикутника`);
console.log(`${height}см - Висота`);
console.log(`${width}cм - ширина`)

//7

// Напишіть скрипт, який знаходить обсяг циліндра висотою 10м (зберігаємо в змінну heightC)
//  і діаметром основи 4м (зберігаємо в dC), результат помістіть в змінну v.

let heightC = 10;
let dc = 4;
let v = heightC * dc;
console.log(`${v} - обсяг циліндра `)

//8

// . У прямокутного трикутника дві сторони n (зі значенням 3) і m (зі значенням 4).
//  Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **).

const n = 3;
console.log(`${n} - 1 сторона `);
const m = 4;
console.log(`${m} - 2 сторона `);
// const k = Math.sqrt((3**2 /5) + (4**2 /5));
const k = Math.sqrt(n ** 2 + m ** 2);
// const k = (3**2 /5) + (4**2 /5)  ;
console.log(`${k} - гіпотенуза `);

//






