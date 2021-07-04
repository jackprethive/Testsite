import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`https://11c4eb39e4c2.ngrok.io/api/login`,data);
  }

  loggedIn(){

    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
