function getInputs() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);

    if (isNaN(operando1) || isNaN(operando2)) {
        alert("Non puoi inserire valori non numerici in un campo numerico");
        return null;
    }
    return { operando1, operando2 };
}

function addizione() {
    const inputs = getInputs();
    if (!inputs) return;

    const { operando1, operando2 } = inputs;
    document.getElementById('risultato').textContent = operando1 + operando2;
}

function sottrazione() {
    const inputs = getInputs();
    if (!inputs) return;

    const { operando1, operando2 } = inputs;
    document.getElementById('risultato').textContent = operando1 - operando2;
}

function moltiplicazione() {
    const inputs = getInputs();
    if (!inputs) return;

    const { operando1, operando2 } = inputs;
    document.getElementById('risultato').textContent = operando1 * operando2;
}

function divisione() {
    const inputs = getInputs();
    if (!inputs) return;

    const { operando1, operando2 } = inputs;

    if (operando2 === 0) {
        alert("Divisione per 0 impossibile");
        return;
    }

    document.getElementById('risultato').textContent = operando1 / operando2;
}
