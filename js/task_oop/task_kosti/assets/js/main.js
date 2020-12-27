
function random() {
    let number = Math.random();
    number = Math.floor(number * 6) + 1;
    return number;
}  

let balance = 10000;

function game() {
    let bet = +userOption.value;
    let sum = +userBet.value;
    if(sum > balance) {
        messagePlace.innerHTML = "Недостаточно средств, пополните счёт";
        return;
    }
    if(sum <= 0) {
        messagePlace.innerHTML = "Сделайте ставку";
    }
    let diceA = random();
    let diceB = random();
    let diceC = random();

    dice1Image.src = `./assets/images/${diceA}.png`;
    dice2Image.src = `./assets/images/${diceB}.png`;
    dice3Image.src = `./assets/images/${diceC}.png`;

    if( (diceA + diceB + diceC) != bet) {
        messagePlace.innerHTML = `Вы проиграли ${sum} грн.`;
        balance = balance - sum;
        userBalance.innerHTML = balance;
    }else if (diceA == diceB|| diceA == diceC || diceB == diceC){
        messagePlace.innerHTML = `Дубль, выигрыш ${sum*2}`;
        balance = balance + sum * 4;
        userBalance.innerHTML = balance;
    }else{
        messagePlace.innerHTML = `Вы выиграли ${sum} грн.`;
        balance = balance + sum * 2;       
        userBalance.innerHTML = balance;
    }
}