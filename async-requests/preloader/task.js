const img = document.getElementById('loader')
const item = document.getElementById('items')

let valute = JSON.parse(localStorage.getItem('valute'))
if (Object.is(valute, null)) {
    valute = [];
}

for (let index = 0; index < (valute.length); index++) {
    const {code, value} = valute[index]
    item.insertAdjacentHTML('beforeend', `<div class="item"><div class="item__code">${code}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div></div>`);
}

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'json'
xhr.send()

if (valute.length > 0) {
    document.querySelector('.items').classList.add('items_active')
}

xhr.addEventListener('load', () => {
    const valutes = xhr.response.response.Valute;
    img.classList.remove('loader_active');
    for (const key in valutes) {
        if (valute.length > 0) {

            const findedValute = valute.findIndex(elem => elem.code === valutes[key].CharCode && elem.value !== valutes[key].Value);
            if (findedValute != -1) {
                const valuteObjectData = {code: valutes[key].CharCode, value: valutes[key].Value};
                item.querySelectorAll('.item__code').forEach(elem => {
                    if (elem.textContent === valutes[key].CharCode) {
                        if (+elem.parentNode.querySelector('.item__value').textContent < valutes[key].Value) {
                            elem.parentElement.querySelector('.item__value').classList.add('stonks')
                            setTimeout(() => {elem.parentElement.querySelector('.item__value').classList.remove('stonks')}, 3000)
                        } else {
                            elem.parentElement.querySelector('.item__value').classList.add('notStonks')
                            setTimeout(() => {elem.parentElement.querySelector('.item__value').classList.remove('notStonks')}, 3000)
                        }
                        elem.parentNode.querySelector('.item__value').textContent = valutes[key].Value;

                    }
                })
                valute.splice(findedValute, 1, valuteObjectData);
                localStorage.setItem(`valute`, JSON.stringify(valute));
            }
        } else {
            let valuteData = valutes[key];
            const it = document.createElement('div')
            const it1 = document.createElement('div')
            const it2 = document.createElement('div')
            const it3 = document.createElement('div')

            it.classList.add('item')
            it1.classList.add('item__code')
            it2.classList.add('item__value')
            it3.classList.add('item__currency')

            it1.textContent = valuteData.CharCode;
            it2.textContent = valuteData.Value;
            it3.textContent = 'руб.';

            const val = JSON.parse(localStorage.getItem('valute')) || [];
            const valuteObjectData = {code: valuteData.CharCode, value: valuteData.Value}
            val.push(valuteObjectData);
            localStorage.setItem(`valute`, JSON.stringify(val));

            it.appendChild(it1)
            it.appendChild(it2)
            it.appendChild(it3)

            // ---/ Другой способ /---
            
            // it.innerHTML = `<div class="item__code">${valuteData.CharCode}</div><div class="item__value">${valuteData.Value}</div><div class="item__currency">руб.</div>`;

            item.appendChild(it)
        }
    }
})

xhr.addEventListener('loadend', () => {
    document.querySelector('.items').classList.remove('items_active')
})
