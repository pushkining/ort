
let weight = +prompt('Введите свою массу в килограммах');
let heigt = +prompt('Введите свой рост в метрах');

let index = weight / (heigt **2);
console.log(index);

if (index <= 16) {
    console.log('Выраженный дефицит массы тела')
}else if(index > 16 && index <= 18.5){
    console.log('Недостаточная масса тела (дефицит)')
}else if( index > 18.5 && index <= 25) {
    console.log('Норма')
}else if(index > 25 && index <= 30) {
    console.log('Избыточная масса тела (предожирение)')
}else if(index > 30 && index <= 35) {
    console.log('Ожирение')
}else if(index > 35 && index <= 40) {
    console.log('Ожирение резкое')
}else {
    console.log('Очень резкое ожирение')
}


