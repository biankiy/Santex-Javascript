
console.log(" ------------- Ejercicio 03 -------------");

let carrito = {
    total: 25,
    productos: ["Azucar"]
}


class Carrito {
    constructor(montoTotal = 0, producto = [])
    {
        this.producto = producto;
        this.montoTotal = montoTotal;
    }
    
    addProduct(nombre, precio, unidades)
    {           
            const precioTotalProducto = (precio * unidades);
        
            if ( this.producto.indexOf(nombre) >= 0)
            {                
                console.log(`\n-- ${nombre} ya existe este producto en el carrito con ${unidades} unidades --`);
            }else{
                
                this.producto.push( nombre, precio, unidades);
                this.montoTotal += precioTotalProducto;
  }  
        };
    }

//prueba
const carrito2 = new Carrito(); 
carrito2.addProduct("Azucar", 450, 3);
carrito2.addProduct("jabon", 115, 2); 
carrito2.addProduct("harina", 275, 6); 
carrito2.addProduct("shampoo", 850, 2);
carrito2.addProduct("Azucar", 450, 6); 

console.log(`Productos en carrito: ${carrito2.producto}`);

console.log("------------------------------")
console.log(`| Monto total pagar: $ ${carrito2.montoTotal} |`);
console.log("------------------------------")

