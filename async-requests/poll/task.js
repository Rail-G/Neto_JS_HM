const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'
xhr.send()


xhr.addEventListener('load', () => {
    const xhrData = xhr.response;
    const docTitle = document.getElementById('poll__title');
    const docBtn = document.getElementById('poll__answers')
    docTitle.textContent = xhrData.data.title;
    const btn = document.createElement('button');

    xhrData.data.answers.forEach(elem => {
        const btn = document.createElement('button');
        btn.classList.add('poll__answer')
        btn.textContent = elem;
        docBtn.appendChild(btn)
        btn.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
            const xhr  = new XMLHttpRequest();
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.responseType = 'json'
            xhr.send(`vote=${xhrData.id}&answer=${xhrData.data.answers.indexOf(elem)}`)
            xhr.addEventListener('load', () => {
                const allVotes = xhr.response.stat.reduce((sum, current) => sum + current.votes, 0)
                docBtn.remove()
                xhr.response.stat.forEach(el => {
                    const result = document.createElement('div')
                    result.innerHTML = `<p>${el.answer}: ${Math.round((el.votes / allVotes) * 100)}%</p>`
                    docTitle.parentElement.appendChild(result)
                })
            })

        })
        
    })
    
})
