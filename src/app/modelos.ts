

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