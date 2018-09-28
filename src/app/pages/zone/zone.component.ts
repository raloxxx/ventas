import { Component, OnInit } from '@angular/core';

import { Zone } from '../../models/zone.model';
import { ZoneService } from '../../services/service.index';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: []
})
export class ZoneComponent implements OnInit {

  zonas: Zone[] = [];

  constructor( public _zoneService: ZoneService ) { }

  ngOnInit() {
    this.cargarZonas();
  }

  cargarZonas(){
    this._zoneService.cargarZonas().toPromise()
        .then(resp => {
          console.log(resp.zonas);
          this.zonas = resp.zonas;
        });
  }
}
