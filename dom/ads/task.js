// JavaScript

// const text = document.querySelector('.card');
// const textCase = document.querySelectorAll('.rotator__case');
// const activeTextCase = document.querySelector('.rotator__case_active');
// let count = 0;

// function test () {
//     textCase[count++].classList.remove('rotator__case_active');
//     textCase[count < textCase.length ? count : count = 0].classList.add('rotator__case_active');
//     speed = parseInt(textCase[count].dataset.speed);
//     color = textCase[count].dataset.color;
//     textCase[count].style.color = color;
//     setTimeout(test, speed)
// }
// test()

// Jquery

const textCase = $('.rotator__case')

let count = 0;

function test () {
    $(textCase[count++]).removeClass('rotator__case_active')
    $(textCase[count < textCase.length ? count : count = 0]).addClass('rotator__case_active')
    const speed = Number($(textCase[count]).data('speed'));
    console.log(speed)
    const color = $(textCase[count]).data('color')
    console.log(color)
    $(textCase[count]).css('color', color);
    setTimeout(test, speed)
}
test()
