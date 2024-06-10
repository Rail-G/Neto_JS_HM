
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input')
    const inoutFile = input.files[0]
    const xhr = new XMLHttpRequest()

    xhr.upload.addEventListener('progress', (e) => {
        const progress = document.getElementById('progress')
        progress.setAttribute('max', e.total)
        progress.value = e.loaded;
    })

    xhr.addEventListener('load', () => {
        if (xhr.status > 200 && xhr.status < 300 )  {
            alert('Good')
        } else {
            alert('Oh no')
        }   
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.responseType = 'json';
    xhr.send(inoutFile)
})
