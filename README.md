# Santex-Javascript


## Autor: Bianca Gimenez

#

En este trabajo práctico ponemos en práctica los conocimientos adquiridos de JavaScript por medio de las clases de XAcademy.


# Trabajo Práctico JavaScript I

## Ejercicio 1: Loops/Bucles

> Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:





#### Ejemplo Ejercicio 1

```bash
para valor 6

1
12
123
1234
12356

para valor 3
1
12
123
```

## Ejercicio 2 : Arrays

> Escribir una funcion que reciba 2 arrays y que devuelva un array con todos los elementos que coincidan entre ellos.




#### Ejemplo Ejercicio 2 

```javascript
Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]


```
## Ejercicio 3

#### 3.1) Dado el siguiente objeto
```javascript
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
```
> Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

>3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal.
```javascript
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}

Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}
```
> 3.3) Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”