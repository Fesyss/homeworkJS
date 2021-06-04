console.log("Перше завдання");
import users from "./users.js";
const getUserNames = (users) => {
  const result = users.map(users => users.name);
  return result;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.log("Кінець першого завдання");
