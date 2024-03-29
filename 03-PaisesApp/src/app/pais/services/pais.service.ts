import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConutriesResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string ='https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<ConutriesResponse[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.http.get<ConutriesResponse[]>(url);
  }

  buscarCapital(termino:string): Observable<ConutriesResponse[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<ConutriesResponse[]>(url);
  }

  getPaisAlpha(id:string): Observable<ConutriesResponse>{
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<ConutriesResponse>(url);
  }

  buscarRegion(region:string): Observable<ConutriesResponse[]>{
    const url=`https://restcountries.com/v2/regionalbloc/${region}`;
    return this.http.get<ConutriesResponse[]>(url);
  }

}
