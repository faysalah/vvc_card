import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BussinessService {
  private url = "http://localhost:52338/api/Organization";
  user:any = localStorage.getItem('currentUser');
  constructor(private _http: Http) {
  }

  getOrganization() {
     
    let bearertoken = 'bearer' + ' ' + this.user.token;
    let headers = new Headers({ 'Authorization': bearertoken });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.url,options).map(res => res.json());
  }

}
