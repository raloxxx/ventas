import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/service.index';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  productos: Product[] = [];

  constructor(  public _productService: ProductService ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this._productService.cargarProductos().toPromise()
        .then( resp => {
          this.productos = resp.productos;
        });
  }
}
