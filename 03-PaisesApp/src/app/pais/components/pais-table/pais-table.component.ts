import { Component, Input, OnInit } from '@angular/core';
import { ConutriesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {
  @Input() paises: ConutriesResponse[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
