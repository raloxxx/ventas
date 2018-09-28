import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-product',
  templateUrl: './stats-product.component.html',
  styleUrls: []
})
export class StatsProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 43, 22, 35, 41, 51], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(51,113,255,0.2)',
      borderColor: 'rgba(51,113,255,1)',
      pointBackgroundColor: 'rgba(51,113,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(51,113,255,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
