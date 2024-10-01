// Función para contar ceros en la matriz
function contarCeros(matriz) {
    let cerosPorFila = [];
    for (let fila of matriz) {
        let contadorCeros = fila.filter(valor => valor === 0).length;
        cerosPorFila.push(contadorCeros);
    }
    return cerosPorFila;
}

// Función para verificar si es un cuadrado mágico
function esCuadradoMagico(matriz) {
    const n = matriz.length;
    const sumaMagica = matriz[0].reduce((a, b) => a + b); // Suma de la primera fila

    for (let fila of matriz) {
        if (fila.reduce((a, b) => a + b) !== sumaMagica) return false;
    }

    for (let j = 0; j < n; j++) {
        let sumaColumna = 0;
        for (let i = 0; i < n; i++) {
            sumaColumna += matriz[i][j];
        }
        if (sumaColumna !== sumaMagica) return false;
    }

    let sumaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
    }
    if (sumaDiagonalPrincipal !== sumaMagica) return false;

    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalSecundaria += matriz[i][n - i - 1];
    }
    if (sumaDiagonalSecundaria !== sumaMagica) return false;

    return true;
}

// Función para convertir el texto ingresado en una matriz de números
function convertirTextoAMatriz(texto) {
    return texto.trim().split('\n').map(fila => fila.split(',').map(Number));
}

// Manejar la entrada del formulario para contar ceros
document.getElementById('contarCerosBtn').addEventListener('click', () => {
    const textoMatriz = document.getElementById('matrizCeros').value;
    const matriz = convertirTextoAMatriz(textoMatriz);
    const cerosPorFila = contarCeros(matriz);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>Ceros por fila: ${cerosPorFila.join(', ')}</p>`;
});

// Manejar la entrada del formulario para verificar si es un cuadrado mágico
document.getElementById('verificarMagicoBtn').addEventListener('click', () => {
    const textoMatriz = document.getElementById('matrizMagico').value;
    const matriz = convertirTextoAMatriz(textoMatriz);
    const esMagico = esCuadradoMagico(matriz);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>¿Es un cuadrado mágico? <span class="${esMagico ? 'true' : 'false'}">${esMagico}</span></p>`;
});
