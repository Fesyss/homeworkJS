import users from './users.js';
console.log("Друге завдання");

const getUsersWithEyeColor = (users, color) => {
  const result = users.filter(user => user.eyeColor === color);
  return result;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
console.log("Кінець другого завдання");
