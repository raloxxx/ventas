import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Zone } from '../../models/zone.model';

import { ZoneService } from '../../services/service.index';

@Component({
  selector: 'app-save-zone',
  templateUrl: './save-zone.component.html',
  styleUrls: []
})
export class SaveZoneComponent implements OnInit {

  zona: Zone = new Zone('', '');

  constructor(public _zoneService: ZoneService) { }

  ngOnInit() {
  }


  guardarZona(f: NgForm){
    
    this._zoneService.guardarZona(this.zona).subscribe(
      res => {
        console.log(res.zona)
      }
    );
  }
}
