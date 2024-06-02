const basketAmount = document.querySelector('.cart__products')

const products = document.querySelectorAll('.product')

let count = 0;

for (let index = 0; index < (localStorage.length + count); index++) {
    if (localStorage.getItem(`item${index}`) !== null) {
        basketAmount.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id=${index}>${localStorage.getItem(`item${index}`)}</div>`);
        document.querySelector('.cart').classList.remove('cart__active')
    } else {
        ++count;
    }
}

if (document.querySelector('.close-btn') != null) {
    document.querySelectorAll('.close-btn').forEach(elem => {
        elem.addEventListener('click', (e) => {
        const taske = e.target.closest('.cart__product');
        const id = taske.getAttribute('data-id');
        localStorage.removeItem(`item${id}`)
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
    elem.addEventListener('click', (e) => {
        const increment = control.querySelector('.product__quantity-control_inc');
        const decrement = control.querySelector('.product__quantity-control_dec');
        increment.onclick = () => {++amount.textContent};
        decrement.onclick = () => {--amount.textContent};
    })

    const basketBtn = elem.querySelector('.product__add');
    const image = elem.querySelector('.product__image')
    basketBtn.addEventListener('click', (e) => {
        let exist = true
        let testt = 0;
        document.querySelectorAll('.cart__product').forEach(elem => {
            if (elem.getAttribute('data-id') == producId) {
                testt = Number(elem.querySelector('.cart__product-count').textContent) + Number(amount.textContent)
                if (testt == 0) {
                    elem.remove()
                    localStorage.removeItem(`item${producId}`)
                }  else if (testt < 0) {
                    alert('У вас одно яблоко, сможете отдать три? Вот и я думаю, что нет.')
                    exist = false
                    return
                }
                elem.querySelector('.cart__product-count').textContent = testt
                exist = false
            }
        })

        if (+amount.textContent < 0 && exist) {
            alert('Товар с минусовым значением означает, что это ВЫ должны нам этот товар (-_ -)/*\\(- _-)')
            exist = false
        } else if ((amount.textContent == 0 && exist) ){
            alert('Серьезно? \\_(-__ -)_/')
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

            // let newIndex = 0;
            // while (localStorage.getItem(`item${newIndex}`) !== null) {
            //     newIndex++;
            // }

            // basket.setAttribute('data-index', newIndex);
            // localStorage.setItem(`item${producId}`, basket.innerHTML)


            // ---/ Попытка делать анимацию. Неудачно /---

            // const {top, left} = image.getBoundingClientRect()
            // const clone = image.cloneNode(true);
            // clone.style.top = top + 'px';
            // clone.style.left = left + 'px'
            // clone.classList.add('animation');
            // document.body.appendChild(clone);
            // basketBtn.onclick = () => {
            //     clone.style.left = 450 + 'px';
            // }
        }
        document.querySelectorAll('.cart__product').forEach(elem => {
            if (elem.getAttribute('data-id') == producId) {
                localStorage.setItem(`item${producId}`, elem.innerHTML)
            }
        })
        // localStorage.setItem(`item${producId}`, basket.innerHTML)
        
        if (document.querySelectorAll('.cart__product').length > 0) {
            document.querySelector('.cart').classList.remove('cart__active')
        } else {
            document.querySelector('.cart').classList.add('cart__active')
        }
    })
})