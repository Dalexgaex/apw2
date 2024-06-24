function invertirCadena() {
    const inputString = document.getElementById('inputString').value;
    const resultado = document.getElementById('resultado');
    resultado.textContent = reverseString(inputString);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
