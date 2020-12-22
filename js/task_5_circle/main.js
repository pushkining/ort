
// for (let i = 2; i <= 1000; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             break;
//         }
//         else if (i == j + 1) {
//             console.log(i);
//         }
//     }
// }

//=============

console.log(3);
console.log(5);
console.log(7);  
for (let i = 2; i <=1000; i++) {
    if (i % 2 == 0) continue;
    if (i % 3 == 0) continue;
    if (i % 5 == 0) continue;
    if (i % 7 == 0) continue;
    console.log(i);
}