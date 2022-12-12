let operation;
let firstNumber;
let readClear = false;
let memory = 0;
let lastEqual = 0;
const whatOnDisplay = (buttonDigit) => {
    if (document.getElementById('display').value === undefined) {
        document.getElementById('display').value = '';
    }

    document.getElementById('display').value = `${document.getElementById('display').value}${buttonDigit}`;

    if (buttonDigit === 'clear') {
        document.getElementById('display').value = '';
    }

    document.getElementById('display').textContent = document.getElementById('display').value;

}
const whatOperator = (operator) => {
    operation = operator;
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';

}
const calculating = () => {
    switch (operation) {
        case '+':
            document.getElementById('display').value = Number(firstNumber) + Number(document.getElementById('display').value);
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
        case '-':
            document.getElementById('display').value = Number(firstNumber) - Number(document.getElementById('display').value);
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
        case '^':
            document.getElementById('display').value = Number(firstNumber) ** Number(document.getElementById('display').value);
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
        case 'rad':
            document.getElementById('display').value = Number(firstNumber) ** (1 / Number(document.getElementById('display').value));
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
        case 'x':
            document.getElementById('display').value = Number(firstNumber) * Number(document.getElementById('display').value);
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
        case 'division':
            document.getElementById('display').value = Number(firstNumber) / Number(document.getElementById('display').value);
            document.getElementById('display').textContent = document.getElementById('display').value;
            break;
    }
    lastEqual = document.getElementById('display').value;
    document.getElementById('display').value = '';
}

const reverse = () => {
    document.getElementById('display').value = - Number(document.getElementById('display').value);
    document.getElementById('display').textContent = document.getElementById('display').value;
}

const memoryReadClear = () => {
    if (readClear === false && memory !== 0) {
        document.getElementById('display').value = memory;
        readClear = true;
        document.getElementById('display').textContent = document.getElementById('display').value;
    }
    else {
        document.getElementById('memory').textContent = '';
    }
}
const memoryPlus = () => {
    if (lastEqual !== 0){
        memory = Number(memory) + lastEqual;
        lastEqual = 0;
        document.getElementById('display').value = '';
        document.getElementById('display').textContent = document.getElementById('display').value;
    }
    else memory = Number(memory) + Number(document.getElementById('display').value);
    console.log(memory);
    document.getElementById('memory').textContent = `M: ${memory}`;


}
const memoryMinus = () => {
    if (lastEqual !== 0){
        memory = Number(memory) - lastEqual;
        lastEqual = 0;
        document.getElementById('display').value = '';
        document.getElementById('display').textContent = document.getElementById('display').value;
    }
    else memory = Number(memory) - Number(document.getElementById('display').value);
    console.log(memory);
    document.getElementById('memory').textContent = `M: ${memory}`;
}