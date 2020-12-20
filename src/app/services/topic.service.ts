import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Topic } from '../models/topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService 
{

  url: String;
  identity: String;
  token: String;

  constructor(private _http: HttpClient) {
    this.url = global.url
  }

  save(topic: Topic, token: string): Observable <any>
  {

    let params = JSON.stringify(topic);
    // Definir Cabecera
    let headers = new HttpHeaders().set('Content-Type', ' application/json')
                                   .set('Authorization', token);;

    // Hacer Peticion Ajax
    return this._http.post(this.url + 'topic/save', params, { headers });
  }

  getTopics(): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');

    // Hacer Peticion Ajax
    return this._http.get(this.url + 'topics', { headers });
  }

  getTopic(id): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');

    // Hacer Peticion Ajax
    return this._http.get(this.url + 'topic/'+id, { headers });
  }

  deleteTopic(id,token): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json')
      .set('Authorization', token);

    // Hacer Peticion Ajax
    return this._http.delete(this.url + 'delete/'+id, { headers });
  }

  updateTopic(topic,token): Observable<any>
  {
    let id = topic.id;
    let params = JSON.stringify(topic);
    let headers = new HttpHeaders().set('Content-Type', ' application/json')
                                  .set('Authorization', token);
                        
    // Hacer Peticion Ajax
    return this._http.put(this.url + 'topic/update', params, { headers });
  }

}
