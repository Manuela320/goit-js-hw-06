let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');
const updateUI = () => {
    valueSpan.textContent = counterValue;
};
decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateUI();
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateUI();
});