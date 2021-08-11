

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
    imagenes: any;
}