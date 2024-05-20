let screen = document.querySelector('#screen')

function appendValue(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}
