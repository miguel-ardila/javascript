/*function areaCircuferencia(radio){
    const pi = 3.1415169;
    const resultado = pi * radio * radio
    //console.log(resultado);
    return resultado;
}

const rasult = areaCircuferencia(10);
const rasult1 = areaCircuferencia(30);
const rasult2 = areaCircuferencia(50);
 
console.log(rasult);
console.log(rasult1);
console.log(rasult2);
console.log(rasult3);
*/
//funciones parte 2 

/*function mayorDeDosNUmeros(ingresoUno, ingresoDos){
    if(ingresoUno > ingresoDos){
        return (ingresoUno + " Es mayor que " + ingresoDos);
    } else {
        return (ingresoDos + " Es mayor que " + ingresoUno);
    }
}
const resultado = mayorDeDosNUmeros (40, 391)
console.log(resultado + "");

mayorDeDosNUmeros(400, 391);

let mensaje = " Hola clase de javascript "
console.log(mensaje[2]);
*/
//funciones parte 3

function containsWord (mensaje , texto) {
    const resultado = mensaje.indexOf(texto);
    console.log(resultado);
    if (resultado !== -1){
        console.log(" La palabra " + texto + " se encuentra en el mensaje");
    } else {
        console.log("La palabra " + texto + " no se encuentra en el mensaje");
}
}
containsWord("Hola clase de javascript", "clase");