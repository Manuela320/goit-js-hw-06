const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', () => {
    const currentValue = nameInput.value.trim();
    nameOutput.textContent = currentValue === '' ? 'Anonymous' : currentValue;
});


