import {Component, OnInit} from '@angular/core';
import {IdentityService} from '../../services/identity.service';
import {PhotoService} from '../../services/photo.service';

@Component({
    selector: 'app-verification',
    templateUrl: './verification.page.html',
    styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
    countryCode: string;
    cardCode: string;
    scanImage: string;
    scanImageBase64Front: string;
    scanImageBase64Back: string;

    constructor(private identity: IdentityService, public photoService: PhotoService) {
    }

    ngOnInit() {
    }

    sendVerification() {
        const data = {
            country_code: this.countryCode,
            card_code: this.cardCode,
            scan_image_base64: [this.scanImageBase64Front, this.scanImageBase64Back]
        };
        this.identity.verifyIdentity(data).subscribe(value => {

        }, error => {

        });
    }

    takeFrontPicture() {
        this.photoService.takePicture().then(value => {
            this.scanImageBase64Front = value;
        });
    }

    takeBackPicture() {
        this.photoService.takePicture().then(value => {
            this.scanImageBase64Back = value;
        });
    }

}
