
for (let i = 2; i <= 1000; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
        else if (i == j + 1) {
            console.log(i);
        }
    }
}

//=============
//  let limit = 1000;
//  let list = [];
// for (let j = 2; j <= limit;  j++) list[j] = j;
 
// let P = 2;
// while (P * P <= limit)
//     {
//     for (let j = P + P; j <= limit; j = j + P) delete list[j];
//     for (let j = P + 1; j <= limit; j++) if (list[j]) {P = j; break;}
//     }

// //for ( j = 0; j <= limit; j++) if (list[j]) S += list[j];
// // for (const item of list) {
// //     console.log(item);
// // }
// console.log (list);

