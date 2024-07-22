// JavaScript

// const hole = indexNumber => document.getElementById(`hole${indexNumber}`);
// const dead = document.getElementById('dead');
// const lost = document.getElementById('lost');
// const win = document.getElementById('win');
// const lose = document.getElementById('lose');

// import {test} from './base.js';
// for (let i = 1; i <= 9; i++) {
//     let holeClass = hole(i);
//     holeClass.onclick = () => {
//         if (!test.game) {
//             return;
//         }
//         test.game = false;
//         if (holeClass.classList.contains('hole_has-mole')) {
//             dead.textContent = Number(dead.textContent) + 1;
//         } else {
//             lost.textContent = Number(lost.textContent) + 1;
//         }
        
//         if (lost.textContent == 5) {
//             dead.textContent = 0;
//             lost.textContent = 0;
//             lose.textContent = Number(lose.textContent) + 1;
//             return alert("Все. Конец!")
//         }
        
//         if (dead.textContent == 10) {
//             dead.textContent = 0;
//             lost.textContent = 0;
//             win.textContent = Number(win.textContent) + 1;
//             return alert("You win")
//         }
//     }
// }

// Jquery

import {test} from './base.js';

const hole = indexNumber => $(`#hole${indexNumber}`)
const dead = $('#dead');
const lost = $('#lost');
const win = $('#win');
const lose = $('#lose');

for (let i = 1; i <= 9; i++) {
    const holeClass = hole(i)
    holeClass.on('click', () => {
        if(!test.game) {
            return;
        }
        test.game = false
        if (holeClass.hasClass('hole_has-mole')) {
            dead.text(Number(dead.text()) + 1)
        } else {
            lost.text(Number(lost.text()) + 1)
        }
        if (lost.text() == 5) {
            dead.text(0);
            lost.text(0);
            lose.text(Number(lose.text()) + 1);
            return alert('Все, конец!')
        }
        if (dead.text() == 10) {
            dead.text(0);
            lost.text(0);
            win.text(Number(win.text()) + 1);
            return alert('Excelent')
        }
    })
}