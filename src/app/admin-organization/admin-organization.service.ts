import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AdminAuthenticationService } from './admin-authentication.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminOrganizationService {
    private url = 'http://localhost:57188/';
    constructor(private http: Http,
        private adminAuthenticationService: AdminAuthenticationService) { }

    addDesign(body) {
        const token = this.adminAuthenticationService.getOrgAdminToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'api/Organizations', body, options)
            .map((response: Response) => {
                return response.json();
            });
    }

    getCardRequest() {
        const token = this.adminAuthenticationService.getOrgAdminToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url+'api/Orgadmin/Cardrequest/'
            + this.adminAuthenticationService.getOrgAdminUserId(), options)
            .map((response: Response) => {
                return response.json();
            });
    }


    getCardByOrganization() {
        const token = this.adminAuthenticationService.getOrgAdminToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.get(this.url+'api/Orgadmin/Card/' +
            this.adminAuthenticationService.getOrgAdminUserId(), options)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateRequest(body, id) {
        const token = this.adminAuthenticationService.getOrgAdminToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.put(this.url+'api/Orgadmin/Card/Update/' + id, body);
    }

    declineRequest(id) {
        const token = this.adminAuthenticationService.getOrgAdminToken();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        const options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url+'api/Orgadmin/Card/Delete/' + id);
    }
}
