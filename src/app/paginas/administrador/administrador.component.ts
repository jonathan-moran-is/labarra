import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos';
import { Contacto } from 'src/app/modelos';
import { Edicion } from 'src/app/modelos';

import { FirestorageService } from 'src/app/servicios/firestorage.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  enableResumen = true;
  enableProductos = false;
  enablePedidos = false;
  enableMensajes = false;
  enableEditar = false;

  enableEdicionInicio = false;
  enableEdicionContacto = false;

  nvaImagen = '';
  nvoArchivo = [];
  productos: Producto[] = [];
  contactos: Contacto[] = [];
  ediciones: Edicion[] = [];

  nvoProducto: Producto;
  nvaEdicion: Edicion;

  enableNvoProducto = false;
  
  private pathProductos = 'Productos/';
  private pathContacto = 'Contacto/';
  private pathEdicion = 'variablesGenerales/';
  private edicionID = 'z0CDeuJgEEaxV3T5hOcL';


  //productos: Observable<any[]>;
  //contactos: Observable<any[]>;
  profileUrl: Observable<string | null>;
  constructor(public firestore: AngularFirestore,
              private storage: AngularFireStorage,
              public firestorageService: FirestorageService,
              public FirestoreService: FirestoreService)
              {
    //this.productos = firestore.collection('Productos').valueChanges();
    //this.contactos = firestore.collection('Contactos').valueChanges();
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerContactos();
  }
  
  //CRUD Producto
  async guardarProducto(){
    for (let i = 0; i < 3; i++) {
      const path = 'Productos';
      const nombre = this.nvoProducto.id+"_"+i;
      const res = await this.firestorageService.subirImagen(this.nvoArchivo[i], path, nombre); 
      this.nvoProducto.imagenes[i]=res;       
      console.log('¡'+(i+1)+'° archivo cargado! URL: ', res);      
    }
    this.FirestoreService.crearDoc(this.nvoProducto, this.pathProductos, this.nvoProducto.id);
    alert('¡Producto guardado con exito!');
  }

  obtenerProductos(){
    this.FirestoreService.obtenerCol<Producto>(this.pathProductos).subscribe( res => {
      this.productos = res;
    });
  }

  eliminarProducto(producto: Producto){
    this.FirestoreService.eliminarDoc(this.pathProductos, producto.id);
    alert('¡Producto eliminado con exito!');
  }

  habilitarNvoProducto(){
    this.enableNvoProducto = true;
    this.nvoProducto = {
    nombreProducto: '',
    precioProducto: null,
    descripcionProducto: '',
    cantidadVendidaProducto: null,
    categoriaProducto: '',
    calificacionProducto: '',
    caracteristicasProducto: '',
    imagenes: [],
    reseñas: '',
    id: this.FirestoreService.obtenerID(),
    fecha: new Date()
  };
  }

  async subirImagen(event: any){
    if(event.target.files && event.target.files[0]){
      for (let i = 0; i < 3; i++) {
        this.nvoArchivo[i] = event.target.files[i];
      }
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.nvaImagen = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.nvoArchivo);
    }  
      console.log('Fin de la funcion para carga de Archivos');
  }

  //Read-Delete Contacto
  obtenerContactos(){
    this.FirestoreService.obtenerCol<Contacto>(this.pathContacto).subscribe( res => {
      this.contactos = res;
    });
  }

  eliminarContacto(contacto: Producto){
    this.FirestoreService.eliminarDoc(this.pathContacto, contacto.id);
    alert('¡Mensaje eliminado con exito!');
  }

  //Edit Contenido
  async guardarEdicion(){
    for (let i = 0; i < 3; i++) {
      const path = 'Imagenes';
      const nombre = "imagenInicio_"+i;
      const res = await this.firestorageService.subirImagen(this.nvoArchivo[i], path, nombre); 
      this.nvaEdicion.imagenesInicio[i]=res;       
      console.log('¡'+(i+1)+'° archivo cargado! URL: ', res);      
    }
    this.FirestoreService.crearDoc(this.nvaEdicion, this.pathEdicion, this.edicionID);
    alert('Cambios guardados con exito!');
  }

   habilitarEdicionInicio(){
    this.enableEdicionInicio = true;
    this.enableEdicionContacto = false;
    this.FirestoreService.obtenerDoc<Edicion>(this.pathEdicion, this.edicionID).subscribe( res => {
      this.nvaEdicion = res;
    });
  }

  habilitarEdicionContacto(){
    this.enableEdicionInicio = false;
    this.enableEdicionContacto = true;
    this.FirestoreService.obtenerDoc<Edicion>(this.pathEdicion, this.edicionID).subscribe( res => {
      this.nvaEdicion = res;
    });
  }
}
