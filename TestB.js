"use strict";
exports.__esModule = true;

var TestB = /** @class */ (function () {
    function TestB() {
        this.articulo1 = new Articulo(123, "acondicionador", 400, "litros");
        this.articulo2 = new Articulo(124, "leche", 150, "litros");
        this.articulo3 = new Articulo(125, "carne", 800, "kilos");
        this.articulo4 = new Articulo(126, "cereales", 570, "kilos");
        this.articulo5 = new Articulo(127, "gaseosa", 220, "litros");
        this.cliente = new Cliente(1, "Joaquin", 20431520460);
        this.detalleFactura1 = new DetalleFactura(3, this.articulo1);
        this.detalleFactura1_2 = new DetalleFactura(2, this.articulo2);
        this.detalleFactura2 = new DetalleFactura(2, this.articulo3);
        this.detalleFactura2_2 = new DetalleFactura(4, this.articulo4);
        this.detalleFactura2_3 = new DetalleFactura(1, this.articulo5);
        this.detalleFactura3 = new DetalleFactura(5, this.articulo2);
        this.detalleFactura3_2 = new DetalleFactura(2, this.articulo3);
        this.factura1 = new Factura("A", 1, 200,"E", 0,0,new Date("2021-1-5"));
        this.factura2 = new Factura("B", 2, 300,"E", 0,0,new Date("2021-1-24"));
        this.factura3 = new Factura("C", 3, 350,"TD", 0,0,new Date("2021-1-30") );
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
    TestB.prototype.pruebaMetodos = function () {
        var mostrar;
        mostrar = (" \t===== PRUEBA DE METODOS ===== \n        \n     -------1- ha pagado en Efectivo el cliente " + this.cliente.razonSocial + ": " + this.cliente.totalFacturadoXTipoPago("E")  +     "\n        \n     -------2- Total items de la factura " + this.factura2.numero + "  es: " + this.factura2.calcularTotalItems() +    "\n        \n     -------3- Total final de la factura " + this.factura2.numero + " es: " + this.factura2.calcularTotalFinal() + "\n        \n     -------4- Subtotal del detalle de factura 2 es: " + this.detalleFactura2.calcularSubTotal() + " ");
        console.log(mostrar);
        return mostrar;
    };
    return TestB;
}());
var test = new TestB();
var mostrar = "" + test.pruebaMetodos();
document.body.innerHTML = mostrar;
