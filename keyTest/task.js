$('#textt').on('keypress', (e) => {
    console.log(String.fromCharCode(e.which))
})

$('#textt1').on('keydown', (e) => {
    console.log(e.key)
})

