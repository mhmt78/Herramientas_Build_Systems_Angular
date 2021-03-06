import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ProductoModel } from '../models/producto.model';

@Injectable()
export class DataService {

  productosSeleccionados : any[] = []; 
  productos : ProductoModel[];

  constructor(private http : Http) {
    this.initProductos();
  }

  getProductos(){
    return this.http.get('https://tiendaangular-eb1d9.firebaseio.com/productos/.json')
      .map((response : Response) => response.json())


      
  }
  initProductos(){
    this.getProductos().subscribe((data)=>this.productos = data)
  }

 /* getUsuarios(){
    return this.http.get('https://back-end-tienda.firebaseio.com/usuarios/.json')
      .map((response : Response) => response.json());
      
  }*/

  addCarrito(pedido){
    this.productosSeleccionados.push(pedido);
  }

  submitPedido(){
    for(let key in this.productos){
      for(let item of this.productosSeleccionados){
        if(this.productos[key].nombre == item.nombre){
          this.productos[key].disponibilidad -= item.cantidad;
        }
      }
    }
    this.productosSeleccionados = [];
    let newData = JSON.stringify(this.productos);
    return this.http.put('https://tiendaangular-eb1d9.firebaseio.com/productos/.json', newData)
    
  }

  
}
