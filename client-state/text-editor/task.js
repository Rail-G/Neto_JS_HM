const textArea = document.querySelector('textarea');

const getLocalItem = localStorage.getItem('textArea');

if (getLocalItem) {
    textArea.value = getLocalItem;
}

document.addEventListener('keydown', (e) => {
    if (!e.repeat) {
        if (e.key = "Enter") {
            document.getElementById('safe').click();
        }
    }
})

document.getElementById('safe').onclick = () => {localStorage.setItem('textArea', textArea.value.trim())}

document.getElementById('delete').onclick = () => {
    localStorage.removeItem('textArea');
    textArea.value = '';
}