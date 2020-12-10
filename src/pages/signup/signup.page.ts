import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    account: Account;

    constructor() {
        this.account = new Account();
    }

    ngOnInit() {
    }

    doSignup() {

    }
}
