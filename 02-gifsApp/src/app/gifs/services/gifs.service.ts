import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseGIF } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'RSQmUN7gnJ59Qw5rTz1YqTIjuyjRfAEx';
  private ServicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial:string[] = [];
  public resultados : any[]=[];

  constructor(
    private http:HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
   }

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string=''){
    query=query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    
    const params = new HttpParams()
      .set('api_key',this.apikey)
      .set('limit', '10')
      .set('q',query)

    this.http.get<ResponseGIF>(`${this.ServicioUrl}/search`,{params})
      .subscribe((resp) =>{
        this.resultados=resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));

      })

  }

}
