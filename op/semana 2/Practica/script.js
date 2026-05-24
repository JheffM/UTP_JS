// Creacion de array con calificaciones
var Calificaciones =[10.2,15.0,14.3,12.5,16.4,14.8,13.2,17.9,18.5,19.3];
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
var cantidad_enteros = 0;
for (var i = 0; i < Copia_Calificaciones.length; i++) {
    if (Number.isInteger(Copia_Calificaciones[i])) {
        cantidad_enteros++; // Incrementa el contador si el elemento es un entero
    }
}
console.log("Cantidad de enteros: " + cantidad_enteros);

//Generar un numero aleatorio entre 1 y 10 para ver que estudiante expondra
    // Genera un numero aleatorio entre 1 y 10
    var estudiante_expositor = Math.floor(Math.random() * 10) + 1; 
    console.log("El estudiante que expondrá es el número: " + estudiante_expositor + " con la calificación: " + Calificaciones[estudiante_expositor - 1]);
