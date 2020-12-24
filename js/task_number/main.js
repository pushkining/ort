// let t = 18;
// let limit = 25;

// while( t < limit) {
//     t++;
//     console.log(`Heating: ${t} C`);
// }
//=======================================
// let secret = Math.random();
// secret *= 100;
// secret = Math.floor(secret) + 1;

// isUserWin = false;

// for(let i = 1; i<=10; i++) {
//     let number = +prompt(`Ваше число: Попытка(${i}/10)`)

//     if ( number == secret) {
//         alert('Вы угадали!!');
//         isUserWin = true;
//         break;
//     }else if( number > secret ){
//         alert('Нет, мое число меньше вашего');
//     }else{
//         alert('Нет, мое число больше вашего');
//     }
// }

// if(!isUserWin) {
//     alert(`Game over!!  Число было: ${secret}`)
// }
//=============================================

let sum = +prompt('Введите сумму:');
let rate = 24;  // % годовых
let term = 12;  // month
let mRate = rate / term ;

for(let i = 1; i <= term; i++) {
    let profit = sum * (mRate /100);
    sum += profit;
    console.log(`Month: ${i} Profit: ${profit.toFixed(3)} Sum: ${sum.toFixed(3)}`);
}