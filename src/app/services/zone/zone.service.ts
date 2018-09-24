import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/Observable';
import { Zone } from '../../models/zone.model';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor( public http: HttpClient) { }

  public cargarZonas(): Observable<any> {
    let url = URL_SERVICIOS + '/zone';

    return this.http.get( url );
  }

  public guardarZona(zone: Zone): Observable<any> {
    let url = URL_SERVICIOS + '/zone';

    return this.http.post( url, zone );
  }
}
