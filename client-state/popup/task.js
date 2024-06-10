function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}
  
  function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(`${name}=`));
    return cookie ? cookie.substring(name.length + 1) : null;
}

if (!(getCookie('popup') == 'true')) {
  document.querySelector('.modal').classList.add('modal_active')
}

const closeBtn = document.querySelector('.modal__close')
closeBtn.addEventListener('click', () => {
    setCookie('popup', 'true')
    document.querySelector('.modal_active').classList.remove('modal_active')
})