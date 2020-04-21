import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  nombreProducto : string;
  productoSeleccionado : ProductoModel = {nombre: '', precio: 0, imagen: '', disponibilidad: 0, descripcion: ''};

  constructor(private route : ActivatedRoute, private data : DataService) { }

  ngOnInit() {
    this.nombreProducto = this.route.snapshot.params['nombre'];
    this.data.getProductos()
      .subscribe(
        (data) => {
          for(let item of data){
            if(item.nombre == this.nombreProducto){
              this.productoSeleccionado = item;
            }
          }
        }
      )
  }

}
