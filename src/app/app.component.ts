import {Component} from '@angular/core';

import {HeaderInfo} from '../models/HeaderInfo';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IdentityService} from "../services/identity.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    headerInfo: HeaderInfo;
    loadingOrAlerting = false;
    rootPage: string;

    constructor(private router: Router,
                private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    ionViewWillEnter() {
        this.rootPage = localStorage.getItem('is_auth') === '1' ? 'home' : '';
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.router.navigateByUrl(this.rootPage);
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    headerLeft() {
        if (this.headerInfo.leftAction && !this.loadingOrAlerting) {
            this.headerInfo.leftAction();
        }
    }

    headerRight() {
        if (this.headerInfo.rightAction && !this.loadingOrAlerting) {
            this.headerInfo.rightAction();
        }
    }

    headerCenter() {
        if (this.headerInfo.centerAction && !this.loadingOrAlerting) {
            this.headerInfo.centerAction();
        }
    }

    headerCenterPressAction() {
        if (this.headerInfo.centerPress && !this.loadingOrAlerting) {
            this.headerInfo.centerPress();
        }
    }

}
