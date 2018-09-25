import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Client } from '../../models/client.model';
import { Zone } from '../../models/zone.model';

import { ClientService, ZoneService } from '../../services/service.index';

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: []
})
export class SaveClientComponent implements OnInit {

  cliente: Client = new Client('', '', '', '', '');
  zonas: Zone[] = [];

  constructor(public _clientService: ClientService, public _zoneService: ZoneService) { }

  ngOnInit() {
    this.cargarZonas();
  }

  guardarCliente(f: NgForm) {

    if ( f.invalid ) {
      return;
    } 

    this._clientService.guardarCliente(this.cliente).subscribe(
      resp => {
        
        
          this.cliente = new Client('', '', '', '', '');
        
      }
    )
  }

  cargarZonas() {
    this._zoneService.cargarZonas().subscribe(
      resp => {
        this.zonas = resp.zonas;
      }
    )
  }

  getZona(id: string) {

  }

}
