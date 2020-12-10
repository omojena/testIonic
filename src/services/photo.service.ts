import {Injectable} from '@angular/core';
import {Plugins, CameraResultType} from '@capacitor/core';

const {Camera} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor() {
    }

    async takePicture() {
        try {
            const profilePicture = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
            return  profilePicture.base64String;
        } catch (error) {
            console.error(error);
        }
    }
}
