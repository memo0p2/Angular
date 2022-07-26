import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConutriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  termino:string = '';
  hayError: boolean = false;
  paises: ConutriesResponse[]=[];
  constructor(
    private paisService:PaisService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
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
  viajar(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    window.location.href = `http://127.0.0.1:5500/index.html?${urlParams}`;
  }

}
