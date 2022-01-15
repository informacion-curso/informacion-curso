import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor(private loadingController: LoadingController) { }

    async showSimpleLoader(message: string, duration: number): Promise<HTMLIonLoadingElement> {
        const loading = await this.loadingController.create({
            message: message,
            duration: duration
        });
        return loading;
    }
}
