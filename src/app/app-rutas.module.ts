import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { ProductoSeleccionadoComponent } from './paginas/producto-seleccionado/producto-seleccionado.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { TableroComponent } from './paginas/tablero/tablero.component';

const routes:Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },
{ path: 'inicio', component: TableroComponent },
{ path: 'acercade', component: AcercadeComponent },
{ path: 'contacto', component: ContactoComponent },
{ path: 'dashboard', component: TableroComponent },
{ path: 'administrador', component: AdministradorComponent },
{ path: 'productos', component: ProductosComponent },
{ path: 'productoSeleccionado', component: ProductoSeleccionadoComponent },
{ path: '**', component: NoEncontradoComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRutasModule { }
