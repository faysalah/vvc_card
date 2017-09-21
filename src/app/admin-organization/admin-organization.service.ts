import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminOrganizationService {
    constructor(private http: Http) { }

    addDesign(body) {
       return this.http.post('http://localhost:57188/api/Organizations', body)
            .map((response: Response) => {
                return response.json();
            });
    }
}
