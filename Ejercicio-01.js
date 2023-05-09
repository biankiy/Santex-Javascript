/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123*/ 

console.log(" ------------- Ejercicio 01 -------------");

function piramideNumerica(filas) {
    let numeroIngresado = " ";
    for (let i = 1; i <= filas; i++){
        
        console.log(numeroIngresado += i + " ");
    }
}
console.log('\n')
piramideNumerica (3);

console.log('\n')
piramideNumerica (6);

console.log('\n')
