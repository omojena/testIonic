import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    account: Account;

    constructor(private router: Router) {
        this.account = new Account();
    }

    ngOnInit() {
    }

    doSignup() {
        this.goTo('');

    }

    goTo(url) {
        this.router.navigateByUrl(`/${url}`);
    }
}
