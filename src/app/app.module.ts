import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRutasModule } from './app-rutas.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { IngresarComponent } from './autenticar/ingresar/ingresar.component';
import { RegistrarComponent } from './autenticar/registrar/registrar.component';
import { PiedepaginaComponent } from './compartidos/piedepagina/piedepagina.component';
import { EncabezadoComponent } from './compartidos/encabezado/encabezado.component';
import { TableroComponent } from './paginas/tablero/tablero.component';
import { RutainidicadorComponent } from './compartidos/rutainidicador/rutainidicador.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { FirestorageService } from './servicios/firestorage.service';
import { FirestoreService } from './servicios/firestore.service';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    InicioComponent,
    AcercadeComponent,
    ContactoComponent,
    ProductosComponent,
    IngresarComponent,
    RegistrarComponent,
    PiedepaginaComponent,
    EncabezadoComponent,
    TableroComponent,
    RutainidicadorComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'labarra-f7836.appspot.com' },
    FirestorageService,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
