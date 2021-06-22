import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Posts} from './posts'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  apiCall(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');

  }
  post(opost:Posts): Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts",opost);
  }
}
