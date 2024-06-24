function eliminarDuplicados() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(item => item.trim());
    const resultado = document.getElementById('resultado');
    resultado.textContent = [...new Set(inputArray)].join(', ');
}
