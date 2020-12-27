
function toF() {
    if(fBtn.classList.contains('selected')) {
        return;
    }
    cBtn.classList.remove('selected');
    fBtn.classList.add('selected');
    let tags = document.querySelectorAll('.temperature');

    for(item of tags) {
        let t = item.innerHTML;
        t = parseInt(t);
        t = t * 1.8 + 32;
        t = Math.round(t);
        item.innerHTML = `${t}°F`;
    }
    
}

function toC() {
    if(cBtn.classList.contains('selected')) {
        return;
    }
    fBtn.classList.remove('selected');
    cBtn.classList.add('selected');
    let tags = document.querySelectorAll('.temperature');
    for(item of tags) {
        let t = item.innerHTML;
        t = parseInt(t);
        t = (t - 32) / 1.8;
        t = Math.round(t);
        item.innerHTML = `${t}°C`;
    }
}