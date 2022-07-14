import { Component, OnInit } from '@angular/core';
import { ConutriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = '';
  hayError: boolean = false;
  paises: ConutriesResponse[]=[];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
    .subscribe(paises=>{
      this.hayError=false;
      this.paises=paises
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }
  sugerencias(termino:string){
    this.hayError=false;
  }
}
