import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService {
  isAuthenticated = new Subject();

  constructor(private http: Http) { }

  login(email: string, passwd: string) {
    const body = 'username=' + email + '&password=' + passwd + '&grant_type=password';
    return this.http.post('http://localhost:57188/Token', body)
      .map((response: Response) => {
        return response.json();
      }
      ).do(
      response => {
        localStorage.setItem('token', 'bearer ' + response.access_token);
        localStorage.setItem('userId', response.userName);
      }
      );
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
