const readlineSync = require('readline-sync');

// Script 1: Edad y Conducir
function verificarEdad() {
    let edad = readlineSync.question('Por favor, ingrese su edad: ');
    edad = parseInt(edad);
    if (isNaN(edad)) {
        console.log("Por favor, ingrese un número válido.");
    } else if (edad >= 18) {
        console.log("Ya puede conducir.");
    } else {
        console.log("No puede conducir.");
    }
}

// Script 2: Calificación según la Nota
function calificarNota() {
    let nota = readlineSync.question('Por favor, ingrese una nota (0-10): ');
    nota = parseFloat(nota);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Por favor, ingrese un número válido entre 0 y 10.");
    } else {
        let calificacion;
        if (nota >= 0 && nota < 3) {
            calificacion = "Muy deficiente";
        } else if (nota >= 3 && nota < 5) {
            calificacion = "Insuficiente";
        } else if (nota >= 5 && nota < 6) {
            calificacion = "Suficiente";
        } else if (nota >= 6 && nota < 7) {
            calificacion = "Bien";
        } else if (nota >= 7 && nota < 9) {
            calificacion = "Notable";
        } else if (nota >= 9 && nota <= 10) {
            calificacion = "Sobresaliente";
        }
        console.log("Calificación: " + calificacion);
    }
}

// Script 3: Concatenar Cadenas
function concatenarCadenas() {
    let cadenas = [];
    let cadena;
    while (true) {
        cadena = readlineSync.question('Ingrese una cadena de texto (o presione Enter para terminar): ');
        if (cadena === '') break;
        cadenas.push(cadena);
    }
    if (cadenas.length > 0) {
        console.log("Cadenas concatenadas: " + cadenas.join('-'));
    } else {
        console.log("No se ingresaron cadenas de texto.");
    }
}

// Script 4: Cálculo de la Letra del DNI
function calcularLetraDNI() {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    while (true) {
        let numero = readlineSync.question('Ingrese un número de DNI (0-99999999) o presione Enter para terminar: ');
        if (numero === '') break;
        numero = parseInt(numero);
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            console.log("Número no válido. Por favor, ingrese un número entre 0 y 99999999.");
        } else {
            let resto = numero % 23;
            let letra = letrasDNI[resto];
            console.log("El número " + numero + " corresponde a la letra " + letra);
        }
    }
}

// Menú para seleccionar la acción
function mostrarMenu() {
    console.log("Seleccione una acción:");
    console.log("1. Verificar si puede conducir");
    console.log("2. Calificar una nota");
    console.log("3. Concatenar cadenas de texto");
    console.log("4. Calcular la letra del DNI");
    console.log("5. Salir");
}

function ejecutarAccion(opcion) {
    switch(opcion) {
        case '1':
            verificarEdad();
            break;
        case '2':
            calificarNota();
            break;
        case '3':
            concatenarCadenas();
            break;
        case '4':
            calcularLetraDNI();
            break;
        case '5':
            console.log("Saliendo...");
            return false;
        default:
            console.log("Opción no válida.");
    }
    return true;
}

// Ciclo principal
let continuar = true;
while (continuar) {
    mostrarMenu();
    let opcion = readlineSync.question('Ingrese el número de la acción que desea realizar: ');
    continuar = ejecutarAccion(opcion);
}
