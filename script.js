function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
    
}

function deleteChar() {
    let screen = document.getElementById('screen').value;
    document.getElementById('screen').value = screen.substring(0, screen.length - 1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}
