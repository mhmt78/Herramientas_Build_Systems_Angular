import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Angular2RoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { VerProductoComponent } from './Components/ver-producto/ver-producto.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { DetalleCarritoComponent } from './Components/detalle-carrito/detalle-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavegacionComponent,
    CatalogoComponent,
    DetalleComponent,
    VerProductoComponent,
    CarritoComponent,
    DetalleCarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
