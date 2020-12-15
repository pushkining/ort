
let year = +prompt('Введите год');
// let a = year % 400;
// let b = year % 100;
// console.log(a,b);

// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//     console.log( `${year} - високосный год`);
// } else {
//     console.log( `${year} - невисокосный год`);
// }

(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 
console.log( `${year} - високосный год`) : console.log( `${year} - невисокосный год`);

