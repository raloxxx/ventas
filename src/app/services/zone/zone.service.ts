import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/Observable';
// import { Zone } from '../../models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor( public http: HttpClient) { }

  public cargarZonas(): Observable<any> {
    let url = URL_SERVICIOS + '/zone';

    return this.http.get( url );
  }
}
