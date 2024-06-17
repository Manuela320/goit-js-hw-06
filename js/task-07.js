const fontSizeControl = document.getElementById('font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});