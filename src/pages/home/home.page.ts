import {Component, OnInit} from '@angular/core';
import {Identity} from '../../models/Indentity';
import {IdentityService} from '../../services/identity.service';
import {Router} from '@angular/router';
import {Account} from '../../models/Account';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    identity: Identity;
    account: Account;

    constructor(private identityService: IdentityService, private router: Router) {
        this.identity = new Identity();
        this.account = new Account();
        this.account.isVerify = false;
        this.identity.first_name = 'Osmel';
        this.identity.last_name = 'Mojena Dubet';
        this.identity.country = 'Cuba';
        this.identity.date_of_birth = '12-12-1993';
        this.identity.sex = 'Male';
    }

    ngOnInit() {
        this.getDataIdentity();
        console.log(localStorage.getItem('account'));

    }

    ionViewWillEnter() {
        this.account.isVerify = localStorage.getItem('isVerify') === '1';
    }

    getDataIdentity() {
        this.identityService.getIdentity().subscribe(value => {
            this.identity = value;
        }, error => {

        });
    }

    goTo(url) {
        this.router.navigateByUrl(`/${url}`);
    }

}
