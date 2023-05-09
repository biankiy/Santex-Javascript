/*2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true */


console.log(" ------------- Ejercicio 02 -------------");

const array1=['rojo', 'azul', 'amarillo','negro','verde'];
const array2=['blanco', 'negro', 'rojo','negro'];

console.log('');

function coincidenciaArray(a1,a2){

    let filtrados=[];

    for(let indice=0; indice< a1.length; indice++){
    
        if(a2.indexOf(a1[indice]) >= 0){

            filtrados.push(a1[indice]);
        }
    }
    return console.log(filtrados);
}

coincidenciaArray(array1,array2);
console.log('\n\n');