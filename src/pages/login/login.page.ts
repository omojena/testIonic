import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';
import {Router} from '@angular/router';
import {IdentityService} from '../../services/identity.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private identity: IdentityService, private router: Router) {
    }
    account: Account = new Account();
    logo: string;

   ionViewWillEnter() {
        localStorage.setItem('is_auth', '0');
    }

    ngOnInit() {

    }

    doLogin() {
        localStorage.setItem('account', this.account.username);
        this.identity.login(this.account).subscribe((auth) => {
            localStorage.setItem('user', JSON.stringify(auth.user));
            localStorage.setItem('is_auth', '1');
            localStorage.setItem('token', auth.token);
            this.goTo('home');
        }, error => {
            console.log(error);
            localStorage.setItem('is_auth', '0');
        });
    }

    goTo(url) {
        this.router.navigateByUrl(`/${url}`);
    }

}
