import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_OCR, API_URL, defaultHeader} from '../app/AppSetting';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IdentityService {

    constructor(public httpClient: HttpClient) {
    }

    verifyIdentity(data): Observable<any> {
        return this.httpClient.post(API_OCR, data, {headers: defaultHeader}).pipe(tap(() => {
        }), catchError((error: any) => {
            throw error;
        }));
    }

    getIdentity(): Observable<any> {
        const url = API_URL + '/api/identity/';
        return this.httpClient.get(url).pipe(tap(() => {
        }), catchError((error) => {
            throw error;
        }));
    }
}
