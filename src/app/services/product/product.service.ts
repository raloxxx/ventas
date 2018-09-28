import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/product.model';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( public http: HttpClient ) {

  }

  public cargarProducto(id): Observable<any>{

    let url = URL_SERVICIOS + '/product/' + id;
    
    return this.http.get(url);
  }

  public cargarProductos(): Observable<any>{

    let url = URL_SERVICIOS + '/product';
    
    return this.http.get(url);
  }

  public guardarProducto(product: Product): Observable<any>{
    
    let url = URL_SERVICIOS + '/product';
    
    return this.http.post(url, product);
  }
}
