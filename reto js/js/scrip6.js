// Función para invertir una cadena
function invertirCadena() {
    const inputString = document.getElementById('inputString').value;
    const resultado = document.getElementById('resultado');
    resultado.textContent = reverseString(inputString);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para verificar si un número es primo
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

// Función para eliminar duplicados de un arreglo
function eliminarDuplicados() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(item => item.trim());
    const resultado = document.getElementById('resultado');
    resultado.textContent = [...new Set(inputArray)].join(', ');
}

// Función para calcular el factorial de un número
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

// Función para contar las vocales en una cadena
function contarVocales() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const resultado = document.getElementById('resultado');
    resultado.textContent = contarVocalesEnCadena(inputString);
}

function contarVocalesEnCadena(str) {
    const vocales = 'aeiou';
    let count = 0;
    for (let char of str) {
        if (vocales.includes(char)) {
            count++;
        }
    }
    return count;
}

// Función para sumar los números en un arreglo
function sumarArreglo() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(item => parseFloat(item.trim()));
    const resultado = document.getElementById('resultado');
    const suma = inputArray.reduce((acc, num) => acc + num, 0);
    resultado.textContent = suma;
}
