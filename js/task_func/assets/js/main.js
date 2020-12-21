function calc() {    
    let sum = +sumInput.value;
    let rate = +rateInput.value;
    let term = +termInput.value;
    let cap = capInput.checked;
    
    let mRate = rate / 12 / 100;
    let result;
    if (cap) {
        result = sum * ((1 + mRate) ** term);
    }else{
        result = sum + sum * mRate * term;
    }
    result = Math.round(result *100) / 100;
    resultPlace.innerHTML = result;
    console.log(result);
}