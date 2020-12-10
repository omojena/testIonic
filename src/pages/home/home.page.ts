import {Component, OnInit} from '@angular/core';
import {HeaderInfo} from '../../models/HeaderInfo';
import {Identity} from '../../models/Indentity';
import {IdentityService} from '../../services/identity.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    headerInfo: HeaderInfo;
    identity: Identity;

    constructor(private identityService: IdentityService) {
        this.identity = new Identity();
        this.identity.first_name = 'Osmel';
        this.identity.last_name = 'Mojena Dubet';
        this.identity.country = 'Cuba';
        this.identity.date_of_birth = '12-12-1993';
        this.identity.sex = 'Male';
    }

    ngOnInit() {
        this.getDataIdentity();
    }

    getDataIdentity() {
        this.identityService.getIdentity().subscribe(value => {
            this.identity = value;
        }, error => {

        });
    }

}
