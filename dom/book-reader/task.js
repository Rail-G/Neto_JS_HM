const bookContent = document.querySelector('.book__content')
const link = document.querySelectorAll('.font-size')
link.forEach(elem => {elem.addEventListener('click', (e) => {
    e.preventDefault()
    link.forEach(item => {
        item.classList.remove('font-size_active');
        bookContent.classList.remove(`font-size_${item.dataset.size}`)
    });
    elem.classList.add('font-size_active')
    if (elem.dataset.size) {
        let result =  `font-size_${elem.dataset.size}`;
        bookContent.classList.add(result);
    }
})})


const color = document.querySelector('.book__control_color').querySelectorAll('.color')
color.forEach(elem => {elem.addEventListener('click', (e) => {
    e.preventDefault()
    color.forEach(item => {
        item.classList.remove('color_active');
        bookContent.classList.remove(`book_color-${item.dataset.textColor}`)
    });
    elem.classList.add('color_active')
    if (elem.dataset.textColor) {
        let result =  `book_color-${elem.dataset.textColor}`;
        bookContent.classList.add(result);
    }
})})


const backGround = document.querySelector('.book__control_background').querySelectorAll('.color')
backGround.forEach(elem => {elem.addEventListener('click', (e) => {
    e.preventDefault()
    backGround.forEach(item => {
        item.classList.remove('color_active');
        bookContent.classList.remove(`bg_color_${item.dataset.bgColor}`)
    });
    if (elem.dataset.bgColor) {
        let result =  `bg_color_${elem.dataset.bgColor}`;
        bookContent.classList.add(result);
    }
})})