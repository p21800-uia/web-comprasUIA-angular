import { Component, OnInit } from '@angular/core';
import { IReporte } from '../iReporte';
import {ReportesService} from '../reportes.service';

@Component({
  selector: 'app-reportes-componente',
  templateUrl: './reportes-componente.component.html',
  styleUrls: ['./reportes-componente.component.css']
})
export class ReportesComponenteComponent implements OnInit {
 

  public reporte: IReporte = { name: "Alfonso", id: 0, 
  codigo:"1", 
  vendedor : 2, 
  clasificacionVendedor : 3, 
  total : 4,
  entrega  : 5 }

 reportes: IReporte[] = [];

 selectedReporte?: IReporte;

  constructor( private datosReportes:ReportesService) 
  { 
  }
               
  ngOnInit(): void {
               
    this.datosReportes.getReportes().subscribe((data: any[])=>{
      console.log(data);
      this.reportes = data;
    })
    
  }
      
 
  onSelect(reporte: IReporte): void {
    this.selectedReporte = reporte;
  }

  
}
