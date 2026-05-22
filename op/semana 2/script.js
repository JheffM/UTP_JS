//----------------- 01. Funciones matematicas operacionales
    //REDONDEO
    console.log(Math.round(4.6)); //Redondea al numero mas cercano
    console.log(Math.ceil(4.2)); //Redondea al numero mayor
    console.log(Math.floor(4.8)); //Redondea al numero menor
    //EXPONENCIA Y RAIZ
    console.log(Math.pow(2, 3)); //Eleva el numero a la potencia indicada
    console.log(Math.sqrt(16)); //Raiz cuadrada
    //VALORES ABSOLUTOS
    console.log(Math.abs(-5)); //Valor absoluto
    //VALORES TRIGONOMETRICOS
    console.log(Math.sin(Math.PI / 2)); //Seno de 90 grados
    console.log(Math.cos(0)); //Coseno de 0 grados
    console.log(Math.tan(Math.PI / 4)); //Tangente de 45 grados
    //VALORES MINIMOS Y MAX
    console.log(Math.min(3, 7, 1)); //Valor minimo
    console.log(Math.max(3, 7, 1)); //Valor maximo
    //VALORES ALEATORIOS
    console.log(Math.random()); //Valor aleatorio entre 0 y 1
    console.log(Math.floor(Math.random() * 10) + 1); //Valor aleatorio entre 1 y 10
    //Esto sucede porque Math.random() genera un numero entre 0 y 1, al multiplicarlo por 10 obtenemos un numero entre 0 y 10, y al sumarle 1 obtenemos un numero entre 1 y 11, pero al redondearlo hacia abajo con Math.floor() obtenemos un numero entre 1 y 10.

// ----------------- 02. Metodos matematicos
    //Conversiones numericas
    Number.parseInt("42"); //Convierte una cadena a un numero entero
    console.log(Number.parseInt("42")); //Salida: 42    
    Number.parseFloat("3.14"); //Convierte una cadena a un numero decimal
    console.log(Number.parseFloat("3.14")); //Salida: 3.14
    Number.toFixed(3.14159, 2); //Redondea un numero a un numero especifico de decimales
    console.log(Number.toFixed(3.14159, 2)); //Salida: 3.14
    console.log(Number.toFixed(Math.PI, 4)); //Salida: 3.1416
    Number.toString(123); //Convierte un numero a una cadena
    console.log(Number.toString(123)); //Salida: "123"
    //Verificaciones numericas
    Number.isNaN("abc"); //Verifica si el valor no es un numero
    console.log(Number.isNaN("abc")); //Salida: true
    Number.isFinite(100); //Verifica si el valor es un numero finito
    console.log(Number.isFinite(100)); //Salida: true
    Number.isInteger(5); //Verifica si el valor es un numero entero
    console.log(Number.isInteger(5)); //Salida: true
    Number.valueof(42); //Devuelve el valor primitivo de un numero
    console.log(Number.valueof(42)); //Salida: 42
    //Constantes matematicas
    console.log(Math.PI); //Valor de pi
    console.log(Math.E); //Valor de e
    console.log(Math.SQRT2); //Valor de la raiz cuadrada de 2