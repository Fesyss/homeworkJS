import users from "./users.js";
console.log("Десяте завдання");

const getSortedUniqueSkills = (users) => {
  const result = users
    .reduce((acc, value) => [...acc, ...value.skills], [])
    .reduce((acc, value) => (acc = acc.includes(value) ? acc : [...acc, value]), [])
    .sort();
  return result;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.log("Кінець десятого завдання");
