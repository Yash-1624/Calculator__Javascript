let expression = [];

function addChar(char) {
    expression.push(char);
    document.getElementById('display').value = expression.join('');
}

function clearAll() {
    expression = [];
    document.getElementById('display').value = '';
}

function clearNumber() {
    while (expression.length && /[0-9.]/.test(expression[expression.length - 1])) {
        expression.pop();
    }
    document.getElementById('display').value = expression.join('');
}

function calculate() {
    try {
        const result = eval(expression.join(''));
        expression = [result];
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
        expression = [];
    }
}

document.addEventListener('keydown', (e) => {
    if (/[0-9]/.test(e.key)) addChar(e.key);
    else if (['+', '-', '*', '/', '(', ')'].includes(e.key)) addChar(e.key);
    else if (e.key === '.') addChar('.');
    else if (e.key === 'Enter') calculate();
    else if (e.key === 'Escape') clearAll();
    else if (e.key === 'Backspace') clearNumber();
});