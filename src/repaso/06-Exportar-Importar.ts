
import { calcularIVA ,Producto } from './05-desestructura-funciones';


const carrito:Producto[]=[
    {
        desc:'telefono1',
        precio:1200
    },
    {
        desc:'telefono2',
        precio:1200
    }
];
const [total,iva]=calcularIVA(carrito);
console.log('total',total);
console.log('iva:',iva);