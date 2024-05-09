const cookie = document.getElementById('cookie');
const counter = document.getElementById("clicker__counter");
const spped = document.getElementById("clicker__speed");
let start = Date.now()
cookie.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    if (counter.textContent % 2 === 0) {
        cookie.width -= 20;
    } else {
        cookie.width += 20;
    }
    let end = Date.now()
    spped.textContent = (counter.textContent/((end-start)/1000)).toFixed(2);
};
