document.getElementById("matrixForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve values from the input fields
    const m1 = [
        [parseFloat(document.getElementById("m1-0-0").value), parseFloat(document.getElementById("m1-0-1").value)],
        [parseFloat(document.getElementById("m1-1-0").value), parseFloat(document.getElementById("m1-1-1").value)]
    ];

    const m2 = [
        [parseFloat(document.getElementById("m2-0-0").value), parseFloat(document.getElementById("m2-0-1").value)],
        [parseFloat(document.getElementById("m2-1-0").value), parseFloat(document.getElementById("m2-1-1").value)]
    ];

    // Perform calculations
    const sum = matrixAdd(m1, m2);
    const subtraction = matrixSubtract(m1, m2);
    const product = matrixMultiply(m1, m2);
    const division = matrixDivide(m1, m2);

    // Display results
    document.getElementById("sumResult").innerText = JSON.stringify(sum);
    document.getElementById("subtractionResult").innerText = JSON.stringify(subtraction);
    document.getElementById("productResult").innerText = JSON.stringify(product);
    document.getElementById("divisionResult").innerText = JSON.stringify(division);
});

// Function to add two matrices
function matrixAdd(a, b) {
    return [
        [a[0][0] + b[0][0], a[0][1] + b[0][1]],
        [a[1][0] + b[1][0], a[1][1] + b[1][1]]
    ];
}

// Function to subtract two matrices
function matrixSubtract(a, b) {
    return [
        [a[0][0] - b[0][0], a[0][1] - b[0][1]],
        [a[1][0] - b[1][0], a[1][1] - b[1][1]]
    ];
}

// Function to multiply two matrices element-wise
function matrixMultiply(a, b) {
    return [
        [a[0][0] * b[0][0], a[0][1] * b[0][1]],
        [a[1][0] * b[1][0], a[1][1] * b[1][1]]
    ];
}

// Function to divide two matrices element-wise
function matrixDivide(a, b) {
    return [
        [b[0][0] !== 0 ? (a[0][0] / b[0][0]).toFixed(2) : 'Inf', b[0][1] !== 0 ? (a[0][1] / b[0][1]).toFixed(2) : 'Inf'],
        [b[1][0] !== 0 ? (a[1][0] / b[1][0]).toFixed(2) : 'Inf', b[1][1] !== 0 ? (a[1][1] / b[1][1]).toFixed(2) : 'Inf']
    ];
}
