import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    account: Account = new Account();
    logo: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.logo = 'http://lorempixel.com/400/200';
        localStorage.setItem('isVerify', '0');
    }

    doLogin() {
        this.goTo('home');
        localStorage.setItem('account', this.account.username);
    }

    goTo(url) {
        this.router.navigateByUrl(`/${url}`);
    }

}
