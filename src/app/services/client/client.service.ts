import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/client.model';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  	totalClientes: number = 0;

  constructor(
    public http: HttpClient
  ) { }
	

  public cargarClientes(): Observable<any>{
		let url = URL_SERVICIOS + '/client';
		  
		return this.http.get( url );

  }

  guardarCliente( medico: Client ) {

		let url = URL_SERVICIOS + '/client';

		// if ( medico._id ) {
		// // actualizando
		// url += '/' + medico._id;
		// url += '?token=' + this._usuarioService.token;

		// return this.http.put( url, medico )
		// 			.map( (resp: any) => {
		// 			swal('Médico Actualizado', medico.nombre, 'success');
		// 			return resp.medico;

		// 			});

		// }else {
		// creando
		// url += '?token=' + this._usuarioService.token;
		return this.http.post( url, medico );
		// }
	}
}
