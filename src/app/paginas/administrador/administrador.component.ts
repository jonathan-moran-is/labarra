import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos';
import { Contacto } from 'src/app/modelos';

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

  nvaImagen = '';
  productos: Producto[] = [];
  contactos: Contacto[] = [];

  nvoProducto: Producto;

  enableNvoProducto = false;
  
  private pathProductos = 'Productos/';
  private pathContacto = 'Contacto/';


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
  guardarProducto(){
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
    imagenes: '',
    reseñas: '',
    id: this.FirestoreService.obtenerID(),
    fecha: new Date()
  };
  }

  async subirImagen(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.nvaImagen = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }


    for (let i = 0; i < 3; i++) {
      const path = 'Productos';
      const nombre = 'Test'+i;
      const file = event.target.files[i];
      const res = await this.firestorageService.subirImagen(file, path, nombre);
      console.log('Recibi res de la promesa', res);
  
      console.log('Fin de la funcion');      
    }
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
}
