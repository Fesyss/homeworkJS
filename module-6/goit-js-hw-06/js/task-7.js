import users from './users.js';
console.log("Сьоме завдання");

const calculateTotalBalance = users => {
  const result = users.map(user => user.balance).reduce((acc, value) => acc + value, 0);
  return result;
};

console.log(calculateTotalBalance(users)); // 20916
console.log("Кінець сьомого завдання");
