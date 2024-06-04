const basketAmount = document.querySelector('.cart__products')

const products = document.querySelectorAll('.product')

let cartItem = JSON.parse(localStorage.getItem('cartItem'))
if (Object.is(cartItem, null)) {
    cartItem = {}
}

for (let index = 0; index < (cartItem.length); index++) {
    const {producId, img, amount} = cartItem[index]
    basketAmount.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id=${producId}><img class="cart__product-image" src=${img}><a class="close-btn">X</a><div class="cart__product-count">${amount}</div></div>`);
    document.querySelector('.cart').classList.remove('cart__active')
}

if (document.querySelector('.close-btn') != null) {
    document.querySelectorAll('.close-btn').forEach(elem => {
        elem.addEventListener('click', (e) => {
        const taske = e.target.closest('.cart__product');
        const id = taske.getAttribute('data-id');
        let items = JSON.parse(localStorage.getItem('cartItem'));
        const existingItemIndex = items.findIndex(item => item.producId === id);
        if (existingItemIndex !== -1) {
            items.splice(existingItemIndex, 1);
        }
        localStorage.setItem(`cartItem`, JSON.stringify(items))
        taske.remove();
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
        const ttest = Array.from(document.querySelectorAll('.cart__product')).find(elem => elem.getAttribute('data-id') === producId)
        if (ttest) {
        increment.onclick = () => {++amount.textContent};
        decrement.onclick = () => {--amount.textContent >= -JSON.parse(localStorage.getItem('cartItem')).find(elem => elem.producId === producId).amount ? amount.textContent : ++amount.textContent};
        } else {
            decrement.onclick = () => {amount.textContent}
        }
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
                    let items = JSON.parse(localStorage.getItem('cartItem'));
                    const existingItemIndex = items.findIndex(item => item.producId === producId);
                    if (existingItemIndex !== -1) {
                        items.splice(existingItemIndex, 1);
                    }
                    localStorage.setItem(`cartItem`, JSON.stringify(items))
                }  else if (testt < 0) {
                    alert('У вас одно яблоко, сможете отдать три? Вот и я думаю, что нет.')
                    exist = false
                    return
                }
                CPItem.querySelector('.cart__product-count').textContent = testt
                exist = false
            }

        if (+amount.textContent < 0 && exist) {
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
        
        // п(-ы)ОПЫтка навести движа. Все готово за исключением начальной постановки изображения.

        // if (+amount.textContent > 0) {
        //     const clone = image.cloneNode(true)
        //     clone.classList.remove('product__image')
        //     clone.classList.add('cart__product-image')
        //     clone.classList.add('photo')
        //     image.insertAdjacentElement("afterend", clone)
        //     function movePhoto() {
        //         const newPositionTop = -100 +  'px';
        //         const g = Array.from(document.querySelectorAll('.cart__product')).find(elem => elem.getAttribute('data-id') === producId)
        //         const newPositionLeft = g.getBoundingClientRect().left + 'px';
        //         console.log(newPositionTop, clone.getBoundingClientRect().top, image.getBoundingClientRect().top)
        //         console.log(newPositionLeft, clone.getBoundingClientRect().left, image.getBoundingClientRect().left)

        //         clone.style.marginLeft = -8.5 + `px`;
        //         clone.style.marginTop = -8 + `px`;
        //         clone.style.top = newPositionTop;
        //         clone.style.left = newPositionLeft;
        //     }

        //     movePhoto()
        //     setTimeout(() => clone.remove(), 1200)
        //     exist = false
        // }
        

        const te = Array.from(document.querySelectorAll('.cart__product')).find(elem => elem.getAttribute('data-id') === producId)
        if (te) {
            let cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
            const existingItemIndex = cartItems.findIndex(item => item.producId === producId);
            if (existingItemIndex !== -1) {
                cartItems.splice(existingItemIndex, 1);
            }
            const stringData = {producId: producId, img: te.querySelector('img').src, amount: te.querySelector('.cart__product-count').textContent}
            cartItems.push(stringData)
            localStorage.setItem(`cartItem`, JSON.stringify(cartItems))
            console.log( JSON.parse(localStorage.getItem('cartItem')))
        }   
        

        if (document.querySelectorAll('.cart__product').length > 0) {
            document.querySelector('.cart').classList.remove('cart__active')
        } else {
            document.querySelector('.cart').classList.add('cart__active')
        }
    })
})
