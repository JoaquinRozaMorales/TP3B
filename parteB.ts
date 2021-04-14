class TestA {
    
    cliente1: Cliente;
    cliente2: Cliente;
    cliente3: Cliente;

    factura1: Factura;
    factura2: Factura;
    factura3: Factura;

    detalleFactura1: DetalleFactura;
    detalleFactura2: DetalleFactura;
    detalleFactura3: DetalleFactura;

    articulo1: Articulo;
    articulo2: Articulo;
    articulo3: Articulo;

    constructor(){

        this.cliente1 = new Cliente(1,"osep",20431520460);
        this.cliente2 = new Cliente(2,"osep",12345678901);
        this.cliente3 = new Cliente(3,"osep",09876543210);

        this.factura1 = new Factura("A", 1, 20, "Debito", 12, 2500, new Date("2021-1-5"));
        this.factura2 = new Factura("B", 2, 20, "Debito", 12, 4500, new Date("2021-1-24"));
        this.factura3 = new Factura("C", 3, 20, "Debito", 12, 6000, new Date("2021-1-30"));
      

        this.detalleFactura1 = new DetalleFactura(2500,2500);
        this.detalleFactura2 = new DetalleFactura(4500,4500);
        this.detalleFactura3= new DetalleFactura(6000,6000);

        this.articulo1 = new Articulo(123, "acondicionador", 400, "litros");
        this.articulo2 = new Articulo(124, "leche", 150, "litros");
        this.articulo3 = new Articulo(125, "carne", 800, "kilos") ;

     
        this.factura1.clientes.push(this.cliente1);
        this.factura2.clientes.push(this.cliente2);
        this.factura3.clientes.push(this.cliente3);

       
        this.detalleFactura1.Facturas.push(this.factura1);
        this.detalleFactura1.Articulos.push(this.articulo1);
        this.detalleFactura2.Facturas.push(this.factura2);
        this.detalleFactura2.Articulos.push(this.articulo2);
        this.detalleFactura3.Facturas.push(this.factura3);
        this.detalleFactura3.Articulos.push(this.articulo3);
        
    }
}








class Cliente {
    numero: number;
    razonSocial: string;
    cuit: number;

    constructor(numero: number, razonSocial: string, cuit: number) {

        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
}


class Factura {
    letra: string;
    numero: number;
    recargo: number;
    tipoPago: String;
    totalItems: number;
    totalFinal: number;
    fecha: Date;
    clientes: Cliente[];

    constructor(letra: string, numero: number, recargo: number,
        tipoPago: String, totalItems: number, totalFinal: number, fecha: Date) {

        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
    }
}


class DetalleFactura {
    cantidad: number;
    subtotal: number;
    Facturas: Factura[];
    Articulos: Articulo[];

    constructor(cantidad: number, subtotal: number) {

        this.cantidad = cantidad;
        this.subtotal = subtotal;

    }
}

class Articulo {
    codigo: number;
    denominacion: string;
    precio: number;
    unidadMedida: String;

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: String) {

        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}