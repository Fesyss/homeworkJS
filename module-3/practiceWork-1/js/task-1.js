'use strict';
// 1. Створи пустий об'єкт user. Додай в об'єкт властивість userName зі своїм іменем. Додай в об'єкт властивість age зі своїм віком. Додай в об'єкт метод showUserName, який виводить твоє ім'я. Додай в об'єкт метод updateAge, який додає під час виклику до твоєго віку 1. 

const user = {};
user.userName = 'Rostik';
user.age = 16;
user.showUserName = function (){
    return this.userName;
};
user.updateAge = function(){
    return this.age ++ ;
}

console.log(user.showUserName());
user.updateAge()
console.log(user.age)

console.log("Кінець 1 завдання")