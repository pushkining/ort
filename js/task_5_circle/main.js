
// let num = +prompt('insert')
// for (let i = 3; i <= 10; i++) {
//     console.log(i);
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             break;
//         }    
//     }   
// }
// let i = 2;
// let n = +prompt('insert');
// let limit = Math.sqrt(n);
// while (i <= limit) {
//     if (n % i == 0) {
//         console.log('No')
//         break;
//     } else {
//         i += 1;
//         console.log(i);
//     }
// }
for (let i = 2; i <= 1000; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
        else if (i == (j + 1)) {
            console.log(i);
        }
    }
}


