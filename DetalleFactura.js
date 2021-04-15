"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, articulo) {
        this.cantidad = cantidad;
        this.subtotal = 0;
        this.cantidad = cantidad;
        this.articulo = articulo;

    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        this.subtotal = this.cantidad * this.articulo.precio;
        return this.subtotal;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
