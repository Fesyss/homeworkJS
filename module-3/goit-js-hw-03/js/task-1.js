'use strict';
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
    console.log(user);
    const entries = Object.entries(user);
 for(const entry of entries){
    const key = entry[0];
    const values = entry[1];
    console.log(`Ключ-${key} значення-${values}`);
 };

console.log('кінець першого завдання 🠕')