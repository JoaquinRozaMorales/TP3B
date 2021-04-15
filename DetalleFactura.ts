import { Articulo } from "./articulo";

export class DetalleFactura {
    cantidad: number=0;
    subtotal: number=0;
    articulo: Articulo;

    constructor(cantidad: number, articulo: Articulo) {

        this.cantidad = cantidad;
        this.articulo = articulo;
    }   

    public calcularSubTotal(): number{ 

        this.subtotal = this.cantidad*this.articulo.precio;   

        return this.subtotal;
    } 

}