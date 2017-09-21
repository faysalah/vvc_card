import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BussinessService {
    constructor(private http: Http) { }
    getOrganization() {
        return this.http.get('http://localhost:57188/api/Organizations')
            .map((result: Response) => result.json());
    }

    addCardDetail(body) {
        return this.http.post('http://localhost:57188/api/Organizations', body)
            .map((response: Response) => {
                return response.json();
            });
    }
}
