
function toF() {
    if (fBtn.classList.contains('selected')) {
        return;
    }
    if (cBtn.classList.contains('selected')) {
        cBtn.classList.remove('selected');
        fBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');

        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = t * 1.8 + 32;
            t = Math.round(t);
            item.innerHTML = `${t}°F`;
        }
    } else {
        kBtn.classList.remove('selected');
        fBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');

        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t - 273) * 1.8 + 32;
            t = Math.round(t);
            item.innerHTML = `${t}°F`;
        }
    }
}


function toC() {
    if (cBtn.classList.contains('selected')) {
        return;
    }
    if (fBtn.classList.contains('selected')) {
        fBtn.classList.remove('selected');
        cBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t - 32) / 1.8;
            t = Math.round(t);
            item.innerHTML = `${t}°C`;
        }
    } else {
        kBtn.classList.remove('selected');
        cBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = t - 273;
            t = Math.round(t);
            item.innerHTML = `${t}°C`;
        }
    }
}


function toK() {
    if (kBtn.classList.contains('selected')) {
        return;
    }
    if (cBtn.classList.contains('selected')) {
        cBtn.classList.remove('selected');
        kBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = t + 273;
            t = Math.round(t);
            item.innerHTML = `${t}K`;
        }
    } else {
        fBtn.classList.remove('selected');
        kBtn.classList.add('selected');
        let tags = document.querySelectorAll('.temperature');
        for (item of tags) {
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t - 32) / 1.8 + 273;
            t = Math.round(t);
            item.innerHTML = `${t}K`;
        }
    }
}