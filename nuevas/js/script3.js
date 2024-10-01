document.getElementById("generateBtn").addEventListener("click", function() {
    const rows = 5;
    const cols = 10;
    const matrix = generateRandomMatrix(rows, cols);
    const { rowSums, rowAverages, colSums, colAverages } = calculateSumsAndAverages(matrix);
    displayMatrix(matrix);
    displayResults(rowSums, rowAverages, colSums, colAverages);
});

function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 100)); // Números aleatorios entre 0 y 99
        }
        matrix.push(row);
    }
    return matrix;
}

function calculateSumsAndAverages(matrix) {
    const rowSums = [];
    const rowAverages = [];
    const colSums = Array(matrix[0].length).fill(0); // Inicializa suma de columnas
    const colAverages = Array(matrix[0].length).fill(0); // Inicializa promedio de columnas

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
            colSums[j] += matrix[i][j]; // Sumar a la columna
        }
        rowSums.push(rowSum);
        rowAverages.push(rowSum / matrix[i].length); // Calcular promedio de la fila
    }

    for (let j = 0; j < colSums.length; j++) {
        colAverages[j] = colSums[j] / matrix.length; // Calcular promedio de cada columna
    }

    return { rowSums, rowAverages, colSums, colAverages };
}

function displayMatrix(matrix) {
    const output = document.getElementById("matrixOutput");
    output.innerHTML = ""; // Limpiar contenido anterior
    const headerRow = document.createElement("tr"); // Crear encabezado
    for (let j = 0; j < matrix[0].length; j++) {
        const th = document.createElement("th");
        th.textContent = `Col ${j + 1}`;
        headerRow.appendChild(th);
    }
    output.appendChild(headerRow); // Añadir encabezado a la tabla
    
    matrix.forEach(row => {
        const rowElement = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            rowElement.appendChild(td);
        });
        output.appendChild(rowElement); // Añadir la fila a la tabla
    });
}

function displayResults(rowSums, rowAverages, colSums, colAverages) {
    const rowResultsOutput = document.getElementById("rowResultsOutput");
    const rowAverageOutput = document.getElementById("rowAverageOutput");
    const colResultsOutput = document.getElementById("colResultsOutput");
    const colAverageOutput = document.getElementById("colAverageOutput");

    rowResultsOutput.innerHTML = ""; // Limpiar contenido anterior
    rowAverageOutput.innerHTML = ""; // Limpiar contenido anterior
    colResultsOutput.innerHTML = ""; // Limpiar contenido anterior
    colAverageOutput.innerHTML = ""; // Limpiar contenido anterior

    for (let i = 0; i < rowSums.length; i++) {
        rowResultsOutput.textContent += `${rowSums[i]}\n`; // Sumas por fila
        rowAverageOutput.textContent += `${rowAverages[i].toFixed(2)}\n`; // Promedios por fila
    }

    for (let j = 0; j < colSums.length; j++) {
        colResultsOutput.textContent += `${colSums[j]}\n`; // Sumas por columna
        colAverageOutput.textContent += `${colAverages[j].toFixed(2)}\n`; // Promedios por columna
    }
}
