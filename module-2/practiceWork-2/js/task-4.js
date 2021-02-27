'use strict';
// 4. Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих аргументів у консоль
const myNewArrowFunction = (...args) => console.log(args);
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");