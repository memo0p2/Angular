import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ConutriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:ConutriesResponse[]
  badges: string []=[]
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais=> {
        this.pais=pais
        const {translations} = this.pais[0];
        const elementos = Object.values(translations);
        elementos.forEach(element => {
          this.badges.push(element.common)
        });
      })

    // this.activateRoute.params
    //   .subscribe(({id})=>{
    //     console.log(id)
    //     this.paisService.getPaisAlpha(id)
    //       .subscribe(pais=>{
    //         console.log(pais)
    //       })
    //   })

  }

}
