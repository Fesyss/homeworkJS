'use strict';
// 5. Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.

const styles = ['Джаз','Блюз' , ];
styles.push('Рок-н-ролл');
styles.splice(Math.round((styles - 1) /2), 1, 'Класика' );
const deletedElement = styles.shift;
console.log(deletedElement);
styles.unshift('Реп' , 'Реггі');
console.log(styles);