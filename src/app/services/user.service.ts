import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  
  url: String;
  identity: String;
  token: String;

  constructor(private _http: HttpClient)
  {
    this.url = global.url
  }

  login(user, getToken = null): Observable <any> 
  {
    // Comprobar si el token get est activo

    if (getToken != null)
    {
      user.getToken = getToken;  
    }

    // Convertir el Object a JSON String
    let params = JSON.stringify(user);
   
    // Definir Cabecera
    let headers = new HttpHeaders().set('Content-Type',' application/json');

    // Hacer Peticion Ajax
    return this._http.post(this.url+'login', params ,{headers});
  }

  getIdentity()
  {
    let identity =JSON.parse(localStorage.getItem('identity'));

    if(identity && identity != null && identity != undefined && identity != 'undefined') 
    {
      this.identity = identity;
    }
    else
    {
      this.identity = null;
    }

    return this.identity;
  }

  getToken()
  {
    let token = localStorage.getItem('token');

    if(token && token != null && token != undefined && token != 'undefined') 
    {
      this.token = token;
    }
    else
    {
      this.token = null;
    }

    return this.token;
  }

}
