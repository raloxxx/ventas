import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../models/client.model';
import { Zone } from '../../models/zone.model';

import { ClientService, ZoneService } from '../../services/service.index';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: []
})
export class ClientComponent implements OnInit {

  clientes: Client[] = [];
  zonas: Zone[] = [];
  cliente: Client = new Client('', '', '', '', '');
  

  constructor(
      public _clientService: ClientService,
      public _zoneService: ZoneService
    ) { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this._clientService.cargarClientes()
    .subscribe(
      data => {
        this.clientes = data.clientes;
      }
    );
  }

}
