import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/service.index';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: []
})
export class ClientComponent implements OnInit {

  clientes: Client[] = [];
  

  constructor(
      public _clientService: ClientService
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
