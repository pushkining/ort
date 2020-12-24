
let player = {}

let secret = Math.random();
secret *= 100;
secret = Math.floor(secret) + 1;
let playerTry = 10;
let isUserWin = false;
// console.log(secret);

function start() {
    let startGame = document.querySelector('.start-game');
    let btnStart = document.querySelector('#btn-start');
    btnStart.style.display = 'none';
    startGame.style.display = 'block';

}

function guess() {
    playerTry--;
    tryOutput.innerHTML = playerTry;
    let playerNum = numberInput.value;
    if (playerNum == secret) {
        resultModal.show();
        resultOutput.innerHTML = "Вы угадали";
        numberOutput.style.display = 'none';
        isUserWin = true;
        guessBtn.style.display = 'none';
    } else if (playerNum > secret) {
        numberOutput.innerHTML ='Нет, число меньше вашего';
    } else {
        numberOutput.innerHTML = 'Нет, число больше вашего';
    }
    if(playerTry <= 0) {
        resultModal.show();
        resultOutput.innerHTML = `Game over!!!! Число было ${secret}`;
        guessBtn.style.display = 'none';
        numberOutput.style.display = 'none';
    }
    //console.log(isUserWin);
}
