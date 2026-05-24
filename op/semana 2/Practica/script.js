// Creacion de array con calificaciones
var Calificaciones =[10.2,15,14.3,12.5,16,14.8,13.2,17,18.5,19.3];
document.getElementById("original-notas").innerHTML = Calificaciones;

//Copia suoerficial de un array
Copia_calificaciones = [...Calificaciones];
document.getElementById("copia-notas").innerHTML = Copia_calificaciones;

//Nota minima
document.getElementById("nota-minima").innerHTML = Math.min(...Copia_calificaciones);
console.log("Nota minima: " + Math.min(Copia_calificaciones));
//Nota maxima
document.getElementById("nota-maxima").innerHTML = Math.max(...Copia_calificaciones);
console.log("Nota maxima: " + Math.max(Copia_calificaciones));
//Promedio
function calcularPromedio(array) {
    let suma = array.reduce((acc, val) => acc + val, 0); // Suma todos los elementos del array
    return suma / array.length; // Retorna el promedio
}

document.getElementById("nota-promedio").innerHTML = calcularPromedio(Copia_calificaciones).toFixed(1); // Muestra el promedio con 2 decimales


//Verificar la cantidad de enteros

function verificarEnteros(array) {
    var cantidad_enteros = 0;
    for (var i = 0; i < Copia_calificaciones.length; i++) {
        if (Number.isInteger(Copia_calificaciones[i])) {
            cantidad_enteros++; // Incrementa el contador si el elemento es un entero
        }
    }
    return cantidad_enteros; // Retorna la cantidad de enteros encontrados
}


document.getElementById("verificacion-resultados").innerHTML = verificarEnteros(Copia_calificaciones);
console.log("Cantidad de enteros: " + verificarEnteros(Copia_calificaciones));

//Generar un numero aleatorio entre 1 y 10 para ver que estudiante expondra
    // Genera un numero aleatorio entre 1 y 10 
function generarNumeroAleatorio(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    document.getElementById("numero-aleatorio").innerHTML = numero;
}


