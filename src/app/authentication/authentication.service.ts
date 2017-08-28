import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { UserRegistration } from "./authenticaton";
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthenticationService {
  private _url = "http://localhost:52338/api/Account/Register";
  public token: string;

  constructor(private _http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  userRegistration(user: UserRegistration) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._url, JSON.stringify(user), options);
  }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let req = 'username=' + username + '&password=' + password + '&grant_type=password';
    return this._http.post('http://localhost:52338/token', req, options)
      .map((response: Response) => {
        let token = response.json() && response.json().access_token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
