document.getElementById("generateBtn").addEventListener("click", function() {
    const size = parseInt(document.getElementById("size").value);
    const matrix = generateMatrix(size);
    displayMatrix(matrix);
});

function generateMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0)); // Inicializa una matriz llena de ceros
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1; // Coloca un 1 en la diagonal principal
    }
    return matrix;
}

function displayMatrix(matrix) {
    const output = document.getElementById("matrixOutput");
    output.textContent = matrix.map(row => row.join(" ")).join("\n");
}

