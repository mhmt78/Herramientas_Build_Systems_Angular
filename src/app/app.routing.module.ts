import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './Components/inicio/inicio.component';
import { VerProductoComponent } from './Components/ver-producto/ver-producto.component';
import { CarritoComponent } from './Components/carrito/carrito.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio', component: InicioComponent, canActivate: [ AuthGuard ] },
    { path: 'inicio/ver-producto/:nombre', component: VerProductoComponent },
    { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
