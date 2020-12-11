import {Component, OnInit} from '@angular/core';
import {IdentityService} from '../../services/identity.service';
import {PhotoService} from '../../services/photo.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-verification',
    templateUrl: './verification.page.html',
    styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
    countryCode: string;
    cardCode: string;
    scanImageBase64Front: string;
    scanImageBase64Back: string;

    constructor(private identity: IdentityService,
                public photoService: PhotoService,
                private router: Router
    ) {
    }

    ngOnInit() {
    }

    sendVerification() {
        const data = {
            country_code: this.countryCode,
            card_code: this.cardCode,
            scan_image_base64: this.scanImageBase64Back
        };
        this.identity.verifyIdentity(data).subscribe(value => {
            if (value.Status === 'Success') {
                const result = value.data.MRZdata;
                const user = JSON.parse(localStorage.getItem('user'));
                user.isVerify = true;
                localStorage.setItem('user', JSON.stringify(user));
                this.saveOrUpdateVerification(result);
            }
            this.goTo('home');
            console.log(value);
        }, error => {
            this.goTo('home');
            console.log(error);
        });
    }

    saveOrUpdateVerification(identity) {
        this.identity.saveIdentity(identity).subscribe(value => {
            const user = JSON.parse(localStorage.getItem('user'));
            user.isVerify = true;
            localStorage.setItem('user', JSON.stringify(user));
            this.identity.updateUserVerify(user, user.id);
            console.log(value);
        }, error => {
            console.log(error);
        });
    }

    takeFrontPicture() {
        const prefix = 'data:image/png;base64,';
        this.photoService.takePicture().then(value => {
            this.scanImageBase64Front = prefix + value;
        });
    }

    takeBackPicture() {
        const prefix = 'data:image/png;base64,';
        this.photoService.takePicture().then(value => {
            this.scanImageBase64Back = prefix + value;
        });
    }

    goTo(url) {
        this.scanImageBase64Back = null;
        this.scanImageBase64Front = null;
        this.router.navigateByUrl(`/${url}`);
    }

}
