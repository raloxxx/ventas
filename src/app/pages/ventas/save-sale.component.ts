import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/service.index';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-save-sale',
  templateUrl: './save-sale.component.html',
  styles: []
})
export class SaveSaleComponent implements OnInit {

  productos: Product[] = [];
  id = '';
  precio_mayor: number;
  peso: number;
  detalle = '';
  productos_select = [];


  producto = new Product('', '', '', '', '');

  constructor( public _productService: ProductService ) { }

  ngOnInit() {

    this.cargarProductos();
  }

  cargarProductos(){

    this._productService.cargarProductos().toPromise()
        .then(resp => {
          console.log("no llega", resp);
          this.productos = resp.productos;
        });
  }

  getProducto( list ){
    let arr = list.split(',');

    this.id = arr[0];
    this.precio_mayor = arr[1];
    this.detalle = arr[2];
  }

  addProductToTable(){
    for( let i = 0; i < this.productos_select.length; i++) {
      if( this.productos_select[i][1] == this.detalle ){
        this.productos_select[i][2] = this.peso;
        this.productos_select[i][3] = this.peso*this.precio_mayor;
        return;
      }
    }
    this.productos_select.push([this.id, this.detalle, this.peso, this.peso*this.precio_mayor]);
  }
}
