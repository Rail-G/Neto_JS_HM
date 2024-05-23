const reveal = document.querySelectorAll('.reveal');
reveal.forEach(rev => {
    setInterval( () => {
        if (rev.getBoundingClientRect().top <= 500) {
            rev.classList.add('reveal_active')
        }
    }, 500);    
})