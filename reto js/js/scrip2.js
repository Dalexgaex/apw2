function verificarPrimo() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const resultado = document.getElementById('resultado');
    resultado.textContent = esPrimo(inputNumber) ? 'Es primo' : 'No es primo';
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
