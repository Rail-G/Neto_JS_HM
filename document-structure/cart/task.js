const basketAmount = document.querySelector('.cart__products')

const products = document.querySelectorAll('.product')

for (let index = 0; index < (localStorage.getItem('length')); index++) {
    if (localStorage.getItem(`item${index}`) !== null) {
        const {img, amount} = JSON.parse(localStorage.getItem(`item${index}`))
        basketAmount.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id=${index}><img class="cart__product-image" src=${img}><a class="close-btn">X</a><div class="cart__product-count">${amount}</div></div>`);
        document.querySelector('.cart').classList.remove('cart__active')
    }
}

if (document.querySelector('.close-btn') != null) {
    document.querySelectorAll('.close-btn').forEach(elem => {
        elem.addEventListener('click', (e) => {
        const taske = e.target.closest('.cart__product');
        const id = taske.getAttribute('data-id');
        localStorage.removeItem(`item${id}`)
        taske.remove();
        localStorage.setItem('length', localStorage.length)
        if (document.querySelectorAll('.cart__product').length < 1) {
            document.querySelector('.cart').classList.add('cart__active')
        }
        })
    })
}

products.forEach(elem => {
    const producId = elem.getAttribute('data-id');
    const control = elem.querySelector('.product__quantity-controls');
    const amount = control.querySelector('.product__quantity-value');
    const increment = control.querySelector('.product__quantity-control_inc');
    const decrement = control.querySelector('.product__quantity-control_dec');
    elem.addEventListener('click', (e) => {
        // const increment = control.querySelector('.product__quantity-control_inc');
        // const decrement = control.querySelector('.product__quantity-control_dec');
        increment.onclick = () => {++amount.textContent};
        decrement.onclick = () => {--amount.textContent < 0};
    })

    const basketBtn = elem.querySelector('.product__add');
    const image = elem.querySelector('.product__image');
    basketBtn.addEventListener('click', (e) => {
        let exist = true
        let testt = 0;
        const CPItem = Array.from(document.querySelectorAll('.cart__product')).find(ele => ele.getAttribute('data-id') === producId)
            if (CPItem) {
                testt = Number(CPItem.querySelector('.cart__product-count').textContent) + Number(amount.textContent)
                if (testt == 0) {
                    CPItem.remove()
                    localStorage.removeItem(`item${producId}`)
                }  else if (testt < 0) {
                    alert('У вас одно яблоко, сможете отдать три? Вот и я думаю, что нет.')
                    exist = false
                    return
                }
                CPItem.querySelector('.cart__product-count').textContent = testt
                exist = false
            }

        if (+amount.textContent < 0 && exist) {
            amount.textContent = 0;
            exist = false
        } else if ((amount.textContent == 0 && exist) ){
            exist = false
        }

        if (exist) {
            const basket = document.createElement('div')
            const amountForBasket = document.createElement('div')
            const basketImg = document.createElement('img')
            const closeBtn = document.createElement('a')
    
            basketImg.src = elem.querySelector('img').src;
            basket.dataset.id = producId; 
            basketImg.classList.add('cart__product-image')
            basket.classList.add('cart__product')
            amountForBasket.classList.add('cart__product-count')
            closeBtn.classList.add('close-btn')

            closeBtn.textContent = "X";
            amountForBasket.textContent = amount.textContent;

            basket.appendChild(basketImg)
            basket.appendChild(closeBtn)
            basket.appendChild(amountForBasket)
            basketAmount.appendChild(basket)   

            closeBtn.addEventListener('click', () => {
                basket.remove()
                if (document.querySelectorAll('.cart__product').length <= 0) {
                    document.querySelector('.cart').classList.add('cart__active')
                }
            })

        }
        // ---/ Попытка сделай анимацию /---
        
        // const clone = image.cloneNode(true)
        // clone.classList.add('photo')
        // image.insertAdjacentElement("afterend", clone)
        // function movePhoto() {
        //     const newPositionTop = (-document.querySelector('.cart__product-image').getBoundingClientRect().top + 35) +  'px';
        //     const newPositionLeft = document.querySelector('.cart__product-image').getBoundingClientRect().left + 'px';
        //     console.log(newPositionTop, clone.getBoundingClientRect().top)
        //     console.log(newPositionLeft, clone.getBoundingClientRect().left)
        
        //     clone.style.top = newPositionTop;
        //     clone.style.left = newPositionLeft;
        // }
        
        // movePhoto()

        const te = Array.from(document.querySelectorAll('.cart__product')).find(elem => elem.getAttribute('data-id') === producId)
        if (te) {
            localStorage.setItem(`item${producId}`, JSON.stringify({img: te.querySelector('img').src, amount: te.querySelector('.cart__product-count').textContent}))
            localStorage.setItem('length', localStorage.length)
        }
        
        if (document.querySelectorAll('.cart__product').length > 0) {
            document.querySelector('.cart').classList.remove('cart__active')
        } else {
            document.querySelector('.cart').classList.add('cart__active')
        }
    })
})
