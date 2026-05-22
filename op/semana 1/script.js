let resultado = document.getElementById("resultado");


let sumaPares = 0;
let sumaImpares = 0;

for(let i = 1; i <= 10; i++){

    if(i % 2 === 0){

        resultado.innerHTML += `<p>${i} es par</p>`;
        sumaPares += i;

    }else{

        resultado.innerHTML += `<p>${i} es impar</p>`;
        sumaImpares += i;

    }

} 
let sumPares = document.getElementById("sumas");
// Mostrar sumas
sumPares.innerHTML += `<h3>Suma de pares: ${sumaPares}</h3>`;
sumPares.innerHTML += `<h3>Suma de impares: ${sumaImpares}</h3>`;