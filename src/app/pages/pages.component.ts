import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  selector = false;

  constructor() { }

  ngOnInit() {
  }

  btnToggle() {
    this.selector = !this.selector;
  }

}
