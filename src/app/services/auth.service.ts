import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';
//import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `https://identitytoolkit.googleapis.com/v1/accounts`;
  private apiKey = `AIzaSyBvtykB98Nv7zuln2UdntHGPQh8Z1f-138`;

  userToken: string;

  //crear nuevos usuarios
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  
  
  constructor( private http: HttpClient) { 
    this.leerToken();
  }


  /*logout() {

    localStorage.removeItem('token');

  }*/

  login( usuario: UsuarioModel ) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      //...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }:signInWithPassword?key=${this.apiKey}`,
       authData
    ).pipe(
      map( resp =>{
        //console.log('Entro en el mapa del RXJS');
        this.guardarToken (resp['idToken']);
        return resp;
      })
    );

  }

  /*nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      //...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }:signUp?key=${this.apiKey}`,
       authData
    ).pipe(
      map( resp =>{
        console.log('Entro en el mapa del RXJS');
        this.guardarToken (resp['idToken']);
        return resp;
      })
    );
  }*/

  private guardarToken (idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if (localStorage.getItem('token')){
      this.userToken=localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    console.log('Guard');
    return this.userToken.length > 2;
  }
}

  




/*export class AuthService {

 
  productosSeleccionados : any[] = []; 
  //productos : Producto[];

  constructor(private http : Http) {
    //this.initProductos();
  }

 /* getProductos(){
    return this.http.get('https://back-end-tienda.firebaseio.com/productos/.json')
      .map((response : Response) => response.json())


     
      
  }
  initProductos(){
    this.getProductos().subscribe((data)=>this.productos = data)
  }

  getUsuarios(){
    return this.http.get('https://usuarios-24013.firebaseio.com/usuarios/.json')
      .map((response : Response) => response.json());
      
  }

  /*addCarrito(pedido){
    this.productosSeleccionados.push(pedido);
  }

  submitPedido(){
    for(let key in this.productos){
      for(let item of this.productosSeleccionados){
        if(this.productos[key].nombre == item.nombre){
          this.productos[key].unidades_disponibles -= item.cantidad;
        }
      }
    }
    this.productosSeleccionados = [];
    let newData = JSON.stringify(this.productos);
    return this.http.put('https://back-end-tienda.firebaseio.com/productos/.json', newData)
    
  }

}*/