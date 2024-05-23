const text = document.querySelector('.card');
const textCase = document.querySelectorAll('.rotator__case');
const activeTextCase = document.querySelector('.rotator__case_active');
let count = 0;

function test () {
    textCase[count++].classList.remove('rotator__case_active');
    textCase[count < textCase.length ? count : count = 0].classList.add('rotator__case_active');
    speed = parseInt(textCase[count].dataset.speed);
    color = textCase[count].dataset.color;
    textCase[count].style.color = color;
    setTimeout(test, speed)
}
test()
