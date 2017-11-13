import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BussinessService {
    private url = 'http://localhost:57188/';
    constructor(private http: Http, private authenticationService: AuthenticationService) { }
    getOrganization() {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + 'api/Organizations', options)
            .map((result: Response) => result.json());
    }

    getCardByUser(): Observable<any> {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + 'api/Cards/' + this.authenticationService.getUserId(), options)
            .map((result: Response) => result.json());
    }

    SearchCardByName(Name) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + 'api/SearchCards/' + Name, options)
            .map((result: Response) => result.json());
    }

    getRequest() {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + 'api/CardRequests/' + this.authenticationService.getUserId(), options)
            .map((result: Response) => result.json());
    }

    addCardDetail(body) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'api/Cards', body, options)
            .map((response: Response) => {
                return response.json();
            });
    }
    sendRequest(body) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'api/CardRequests', body, options);
    }

    addWallet(body) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'api/Wallets', body, options)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateRequest(body, id) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + 'api/CardRequests/update/' + id, body, options);
    }

    declineRequest(id) {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url + 'api/CardRequests/delete/' + id, options)
            .map((response: Response) => {
                return response.json();
            });
    }

    getWalletbyUser() {
        const token = this.authenticationService.getToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + 'api/wallets/' + this.authenticationService.getUserId(), options)
            .map((result: Response) => result.json());
    }

}
