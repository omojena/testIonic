import {Component, OnInit} from '@angular/core';
import {Account} from '../../models/Account';
import {Router} from '@angular/router';
import {IdentityService} from "../../services/identity.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    account: Account = new Account();
    rePassword: string;

    constructor(private identity: IdentityService, private router: Router) {

    }

    ngOnInit() {
    }

    doSignup() {
        this.identity.register(this.account).subscribe(value => {
            console.log(value);
            this.goTo('');
        }, error => {
            console.log(error);
        });

    }

    goTo(url) {
        this.router.navigateByUrl(`/${url}`);
    }
}
