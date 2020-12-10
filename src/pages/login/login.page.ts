import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    account: Account;

    constructor() {
        this.account = new Account();
    }

    ngOnInit() {
    }

    doLogin() {
    }

}
