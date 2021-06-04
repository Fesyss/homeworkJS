import users from './users.js';
console.log("П'яте завдання");

const getUserWithEmail = (users, email) => {
  const result = users.find(user => user.email === email);
  return result;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
console.log("Кінець п'ятого завдання");

