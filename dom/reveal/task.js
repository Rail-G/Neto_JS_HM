const reveal = document.querySelectorAll('.reveal');
    document.addEventListener('scroll', () => {
        reveal.forEach(elem => {
            if (elem.getBoundingClientRect().top < window.innerHeight - 50) {
                elem.classList.add('reveal_active')
            }
        })
})