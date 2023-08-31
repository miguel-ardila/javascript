/*
//crea 3 variables con 3 tipos diferentes
let nombre = "miguel";
let edad = 32;
let nacionalidad = "colombiano";

//crear una constante con un valor booleano
const esColombiano = true;

//crear una variable con tu edad que pueda ser modificada
let miEdad = "30";

//edad moficada
miEdad = 32;

//imprimir consola
console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Nacionalidad: ", nacionalidad);
console.log("Es Colombiano: ", esColombiano);
console.log("Mi edad: ", miEdad);


//Declara una variable llamada miEdad.
let miEdad;

//En otra línea asigna tu edad a esa variable.
miEdad = 32;

//Declara una variable llamada miNombre.
let miNombre;

//En otra línea inicializa esa variable con tu nombre.
miNombre = "Miguel";

//En otra línea reasigna a la variable miEdad el valor de la mitad de tu edad más 3 veces la cantidad de caracteres de tu nombre.
miEdad = (miEdad / 2) + (3 * miNombre.length);

// Imprimir consola
console.log("Mi nombre:", miNombre);
console.log("Mi edad:", miEdad);
console.log(typeof miNombre);
console.log(typeof miEdad);

// 1. Declara una variable llamada miRefran.
let miRefran;

// 2. En otra línea asigna un refrán cualquiera a esa variable.
miRefran = "Más vale tarde que nunca.";

// 3. Declara una variable llamada longitudRefran y asigna a esa variable la cantidad de letras de miRefran.
let longitudRefran = miRefran.length;

// 4. En otra línea asigna a la variable novenaLetra el valor de la novena letra del refrán.
let novenaLetra = miRefran[8]; // Los índices en JavaScript comienzan en 0, así que la novena letra tiene índice 8.

// 5. En otra línea asigna a la variable ultimaLetra el valor de la última letra del refrán.
let ultimaLetra = miRefran[longitudRefran - 1]; // Se resta 1 porque los índices son base 0.

// 6. Busca el índice de la cadena "que" en tu refrán y asignalo a la variable indicePalabra.
let indicePalabra = miRefran.indexOf("que");

// Si el índice es menor que cero (es decir, "que" no se encontró), busca otra preposición hasta que sea mayor a 0.
if (indicePalabra < 0) {
    indicePalabra = miRefran.indexOf("vale"); // Puedes reemplazar "vale" por otra palabra si lo deseas.
}

// 7. Reemplaza la preposición encontrada por la cadena "(palabra ro"
let nuevaRefran = miRefran.replace(miRefran.substring(indicePalabra, indicePalabra + 3), "palabra robada");

// 8. Convierte a mayúsculas todos los caracteres del refrán.
let refranMayusculas = miRefran.toUpperCase();

// Imprimir los valores en la consola
console.log("Mi refrán:", miRefran);
console.log("Longitud del refrán:", longitudRefran);
console.log("Novena letra:", novenaLetra);
console.log("Última letra:", ultimaLetra);
console.log("Índice de 'que':", indicePalabra);
console.log("Nuevo refrán:", nuevaRefran);
console.log("Refrán en mayúsculas:", refranMayusculas);



// 1. Condición para determinar el número mayor
let numero1 = 10;
let numero2 = 20;

if (numero1 > numero2) {
    console.log("El número 1 es mayor.");
} else if (numero2 > numero1) {
    console.log("El número 2 es mayor.");
} else {
    console.log("Los números son iguales.");
}

// 2. Condición para verificar la longitud del nombre
let nombre = "Miguel";

if (nombre.length > 5) {
    console.log("El nombre tiene más de 5 caracteres.");
} else {
    console.log("El nombre tiene 5 o menos caracteres.");
}

// 3. Condición para verificar si una frase contiene la subcadena "si"
let frase = "Sí, estoy de acuerdo.";

if (frase.includes("si")) {
    console.log("La frase contiene la subcadena 'si'.");
} else {
    console.log("La frase no contiene la subcadena 'si'.");
}
*/

// javascript bucles y funciones

/* let contador = 1;

while (contador <= 5) {
console.log(contador);
contador++;
}

for (let num =0; num<9; num++) {
    console.log(num);
}


//ciclo for..of loop
const cats = ["leopard", "serval", "jaguar", "tiger", "caracal", "lion"];
for (const cat of cats) {
    console.log(cat);
}

//Bucles: Práctica #1
for (let i=0; i<10; i++) {
    console.log("Me encanta Javascript!");
}

const numeros=[1,2,3,4,5,6,7,8,9,10]
for (let i=0; i<numeros.length; i++) {
    console.log(numeros[i])
}

let notas = [1,2,3,4,5]
let contadorNotas=0;
for (let validacion of notas){
    if (validacion<=3) {
        console.log("Reprobaste la materia con nota: " + contadorNotas++)
    } else {
        console.log("Aprobaste la materia con nota de: " + contadorNotas++)
}
} */
// COMENTAR RAPIDO alt+shift+A

/* var n1 = window.prompt("Ingrese el primer número: ");
var n2 = window.prompt("Ingrese el segundo número: ");

if (n1 > n2) {
alert(n1 + " es el número mayor.");
} else {
alert(n2 + " es el número mayor.");
}
 */

