import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _auth: Auth | undefined

  get auth(){
    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(tap(resp=>this._auth=resp))
  }
}
