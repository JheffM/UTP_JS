// Creacion de array con calificaciones
var Calificaciones =[10.2,15.0,14.3,12.5,16.4,14.8,13.2,17.9,18.5,19.3];

//Copia suoerficial de un array
Copia_calificaciones = [...Calificaciones];

//Nota minima
console.log("Nota minima: " + Math.min(Copia_calificaciones));
//Nota maxima
console.log("Nota maxima: " + Math.max(Copia_calificaciones));
//Promedio
var suma = 0;  
for (var i = 0; i < Copia_Calificaciones.length; i++) {
    suma += Copia_Calificaciones[i]; // Suma cada elemento del array
}
console.log("Promedio de Calificaciones: " + );