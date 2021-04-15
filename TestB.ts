import { Articulo } from "./articulo";
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./factura";

class TestB {
    
    cliente: Cliente;
 
    factura1: Factura;
    factura2: Factura;
    factura3: Factura;

    detalleFactura1: DetalleFactura;
    detalleFactura1_2: DetalleFactura;
    detalleFactura2: DetalleFactura;
    detalleFactura2_2: DetalleFactura;
    detalleFactura2_3: DetalleFactura;
    detalleFactura3: DetalleFactura;
    detalleFactura3_2: DetalleFactura;

    articulo1: Articulo;
    articulo2: Articulo;
    articulo3: Articulo;
    articulo4: Articulo;
    articulo5: Articulo;

    constructor(){

        this.articulo1 = new Articulo(123, "acondicionador", 400, "litros");
        this.articulo2 = new Articulo(124, "leche", 150, "litros");
        this.articulo3 = new Articulo(125, "carne", 800, "kilos") ;
        this.articulo4 = new Articulo(126, "cereales", 570, "kilos") ;
        this.articulo5 = new Articulo(127, "gaseosa", 220, "litros") ;

        this.cliente = new Cliente(1,"Joaquin",20431520460);
    

        this.factura1 = new Factura("A", 1, 200, "E", 2500, new Date("2021-1-5"));
        this.factura2 = new Factura("B", 2, 300, "E", 4500, new Date("2021-1-24"));
        this.factura3 = new Factura("C", 3, 350, "TD", 6000, new Date("2021-1-30"));

       

        this.detalleFactura1 = new DetalleFactura(3,this.articulo1);
        this.detalleFactura1_2 = new DetalleFactura(2,this.articulo2);
        this.detalleFactura2 = new DetalleFactura(2,this.articulo3);
        this.detalleFactura2_2 = new DetalleFactura(4,this.articulo4);
        this.detalleFactura2_3 = new DetalleFactura(1,this.articulo5);
        this.detalleFactura3= new DetalleFactura(5,this.articulo2);
        this.detalleFactura3_2= new DetalleFactura(2,this.articulo3);

        this.cliente.facturas.push(this.factura1);
        this.cliente.facturas.push(this.factura2);
        this.cliente.facturas.push(this.factura3);

        this.factura1.detallesfacturas.push(this.detalleFactura1);
        this.factura1.detallesfacturas.push(this.detalleFactura1_2);
        this.factura2.detallesfacturas.push(this.detalleFactura2);
        this.factura2.detallesfacturas.push(this.detalleFactura2_2);
        this.factura2.detallesfacturas.push(this.detalleFactura2_3);
        this.factura3.detallesfacturas.push(this.detalleFactura3);
        this.factura3.detallesfacturas.push(this.detalleFactura3_2);
        
    }



    pruebaMetodos(){
        let mostrar: String;
        mostrar = (` \t===== PRUEBA DE METODOS ===== 
        \n              1- forma de pago: Efectivo del cliente: ${this.cliente.razonSocial} igual a: ${this.cliente.totalFacturadoXTipoPago("E")}
        \n              2- Total items de la factura: ${this.factura2.numero} es: ${this.factura2.calcularTotalItems()}
        \n              3- Total final de la factura: ${this.factura1.numero} es: ${this.factura1.calcularTotalFinal()}
        \n              4- Subtotal del detalle de factura 1 es: ${this.detalleFactura1.calcularSubTotal()} `);
        console.log(mostrar);
        return mostrar;
  
    }


}


 let test: TestB = new TestB();
 let mostrar:string=`${test.pruebaMetodos()}`;

 document.body.innerHTML = mostrar;
















