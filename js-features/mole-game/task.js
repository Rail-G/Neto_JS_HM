const hole = indexNumber => document.getElementById(`hole${indexNumber}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const win = document.getElementById('win');
const lose = document.getElementById('lose');

import {test} from './base.js';
for (let i = 1; i <= 9; i++) {
    let holeClass = hole(i);
    holeClass.onclick = () => {
        if (!test.game) {
            return;
        }
        test.game = false;
        if (holeClass.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }
        
        if (lost.textContent == 5) {
            dead.textContent = 0;
            lost.textContent = 0;
            lose.textContent = Number(lose.textContent) + 1;
            return alert("Все. Конец!")
        }
        
        if (dead.textContent == 10) {
            dead.textContent = 0;
            lost.textContent = 0;
            win.textContent = Number(win.textContent) + 1;
            return alert("You win")
        }
    }
}