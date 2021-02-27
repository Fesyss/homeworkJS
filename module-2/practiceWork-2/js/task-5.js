'use strict';
// 5. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:

const myAverageScore = (numbers) =>{
    let total = 0;

    for (const number of numbers ){
        total +=number;
    }
    const avg = total / numbers.length;
    let avgScore;
    if (avg >= 91){
        avgScore = `A`;
    }else if ( avg < 91 && avg >=81){
        avgScore = `B`;
    }else if (avg < 81 && avg >=71){
        avgScore = `c`;
    }else {
        avgScore = `D`;
    }
    return `My average score: ${avgScore} `
}


console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));