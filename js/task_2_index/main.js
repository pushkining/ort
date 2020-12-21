let rateIndex;

function imt() {

    let weight = +weightInput.value;
    let height = +heightInput.value;
    let cap = capCheck.checked;
    //console.log(`Индекс массы тела: ${index.toFixed(2)} кг/м2`);

    if (height > 2.72 || cap) {
        height = height / 100;
    }
    //console.log(height);
    let index = weight / (height ** 2);
    index = Math.round(index *100) / 100;
    indexOutput.innerHTML = index;
    
    if (index <= 16) {
        rateIndex = 'Выраженный дефицит массы тела'
    } else if (index > 16 && index <= 18.5) {
        rateIndex = 'Недостаточная масса тела (дефицит)'
    } else if (index > 18.5 && index <= 25) {
        rateIndex = 'Норма'
    } else if (index > 25 && index <= 30) {
        rateIndex = 'Избыточная масса тела (предожирение)'
    } else if (index > 30 && index <= 35) {
        rateIndex = 'Ожирение'
    } else if (index > 35 && index <= 40) {
        rateIndex = 'Ожирение резкое'
    } else {
        rateIndex = 'Очень резкое ожирение'
    }
    rateInd.innerHTML = rateIndex

}
