const textArea = document.querySelector('textarea');

const getLocalItem = localStorage.getItem('textArea');

textArea.value = getLocalItem;


textArea.addEventListener('input', (e) => {
    localStorage.setItem('textArea', textArea.value.trim())
})


document.getElementById('delete').onclick = () => {
    localStorage.removeItem('textArea');
    textArea.value = '';
}