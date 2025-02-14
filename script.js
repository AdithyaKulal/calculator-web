function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid Expression');
    }
}

// Adding keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        let display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});

