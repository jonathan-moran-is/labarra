

export interface Producto {
    nombreProducto: string;
    precioProducto: number;
    descripcionProducto: string;
    cantidadVendidaProducto: number;
    categoriaProducto: string;
    calificacionProducto: string;
    caracteristicasProducto: any;
    imagenes: any;
    reseñas: any;
    id: string;
    fecha: Date;
}

export interface Contacto {
    contactoNombre: string;
    contactoTelefono: number;
    contactoMotivo: string;
    contactoMensaje: string;
    fecha: Date;
    id: string;
}

export interface Edicion {
    experiencia: any;
    horarioContacto: any;
    localInfoContacto: any;
    parrafoContacto1: string;
    parrafos: any;
    tituloParrafo: any;
    imagenesInicio: any;
}

export interface Pedido {
    nombreCliente: string;
    direccion: string;
    numeroTelefono: number;
    cantidad: number;
    pago : [
        numeroTarjeta: number,
        nombres: string,
        apellidos: string,
        vencimiento: Date,
        csc: number,
        monto: number,
        credito: boolean
    ];
    nombreProducto: string;
    precioProducto: number;
}