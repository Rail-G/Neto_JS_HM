const link = document.querySelectorAll('.has-tooltip')
const tool = document.querySelector('.tooltip')

link.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        if (tool.textContent === elem.title) {
            tool.classList.toggle('tooltip_active')
            return
        }
        tool.textContent = elem.title;
        const posit = elem.getBoundingClientRect();
        tool.style.top = (posit.top + posit.height) + 'px';
        tool.style.left = posit.left + 'px';
        document.addEventListener('scroll', () => {
            tool.style.top = (elem.getBoundingClientRect().top + posit.height) + 'px';
        })
        tool.classList.add('tooltip_active')
    })
})