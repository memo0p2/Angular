import { Component, OnInit } from '@angular/core';
import { ConutriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionActiva: string = '';
  paises: ConutriesResponse[]=[];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getClaseCss(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    this.regionActiva = region
    this.paisService.buscarRegion(region.toLowerCase())
      .subscribe(resp=>{
        this.paises=resp
      })
  }

}
