import users from './users.js';
console.log("Дев'яте завдання");

const getNamesSortedByFriendsCount = users => {
  const result = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name)
  return result;
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.log("Кінець дев'ятого завдання");
