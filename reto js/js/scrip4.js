function calcularFactorial() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const resultado = document.getElementById('resultado');
    resultado.textContent = factorial(inputNumber);
}

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
