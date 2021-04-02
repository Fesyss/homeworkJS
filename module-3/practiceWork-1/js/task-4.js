'use strict';
// 4. Для об'єкта виконати наступні операції: а) за допомогою Object.entries() вивести в консоль пари "ключ- значення" цього об’єкту; б) Знайти площу будівлі і вивести в консоль.

const cafe= {
    name: 'Republic',
    width: 200,
    height: 300,
    personal:5,
    hr: true,
};
const entries = Object.entries(cafe);
for (const entry of entries){
    const key = entry[0];
    const values = entry[1];
    console.log(`Ключ-${key} значення-${values}`);
};
const area = cafe.width * cafe.height;
console.log(area);

console.log('Кінець практичної')