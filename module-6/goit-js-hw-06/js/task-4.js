import users from './users.js';
console.log("Четверте завдання");

const getInactiveUsers = users => {
  const result = users.filter(user => !user.isActive);
  return result;
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
console.log("Кінець четвертого завдання");
