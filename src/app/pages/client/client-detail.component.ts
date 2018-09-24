import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Client } from '../../models/client.model';
import { Zone } from '../../models/zone.model';

import { ClientService, ZoneService } from '../../services/service.index';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: []
})
export class ClientDetailComponent implements OnInit {

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
        
        if ( !resp.ok ){
          console.log( "El no se puede procesar" );
          return ;
        }else {
          this.cliente = new Client('', '', '', '', '');
        }
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
