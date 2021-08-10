import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FirestorageService } from 'src/app/servicios/firestorage.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

import { Producto } from 'src/app/modelos';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  enableTablaProductos = true;
  enableProductoS = false;
  productos: Producto[] = [];

  productoSeleccionado: Producto;
  private pathProductos = 'Productos/';

  constructor(firestore: AngularFirestore,
              private storage: AngularFireStorage,
              public firestorageService: FirestorageService,
              public FirestoreService: FirestoreService) {
    //this.productos = firestore.collection('Productos').valueChanges();
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.FirestoreService.obtenerCol<Producto>(this.pathProductos).subscribe( res => {
      this.productos = res;
    });
  }

  abrirProductoS(producto){

  };

}
