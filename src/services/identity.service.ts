import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {API_OCR, API_URL, defaultHeader} from '../app/AppSetting';
import {catchError} from 'rxjs/operators';
import {Account} from '../models/Account';

@Injectable({
    providedIn: 'root'
})
export class IdentityService {

    constructor(public httpClient: HttpClient) {
    }

    static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            error.error.message);
    }

    static getHttpHeadersWithToken(): any {
        return {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            user_id: JSON.parse(localStorage.getItem('user')).id
        };

    }

    verifyIdentity(data): Observable<any> {
        return this.httpClient
            .post(API_OCR, data, {headers: defaultHeader})
            .pipe(
                catchError(IdentityService.handleError)
            );
    }

    login(account: Account): Observable<any> {
        const url = API_URL + '/api/user/login/';
        const body = {
            username: account.username,
            password: account.password
        };
        return this.httpClient.post(url, body).pipe(
            catchError(IdentityService.handleError)
        );

    }

    register(user: Account): Observable<any> {
        const header = IdentityService.getHttpHeadersWithToken();
        const url = API_URL + '/api/user/register';
        return this.httpClient
            .post(url, user, {headers: header})
            .pipe(catchError(IdentityService.handleError));
    }


    getIdentity(id): Observable<any> {
        const url = API_URL + '/api/identity/user/' + id;
        return this.httpClient
            .get(url)
            .pipe(catchError(IdentityService.handleError));
    }

    saveIdentity(identity): Observable<any> {
        const header = IdentityService.getHttpHeadersWithToken();
        const url = API_URL + '/api/identity/';
        return this.httpClient
            .post(url, identity, {headers: header})
            .pipe(catchError(IdentityService.handleError));
    }

    updateUserVerify(verify, id) {
        const header = IdentityService.getHttpHeadersWithToken();
        const url = API_URL + '/api/user/' + id;
        return this.httpClient
            .put(url, verify, {headers: header})
            .pipe(catchError(IdentityService.handleError));
    }
}
