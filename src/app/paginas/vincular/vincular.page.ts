import { AlertController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vincular',
  templateUrl: './vincular.page.html',
  styleUrls: ['./vincular.page.scss'],
})
export class VincularPage implements OnInit {

  constructor(private alertController: AlertController,
    public menu:MenuController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Vinculación al arduino',
      buttons: ['Vincular'],
      inputs: [
        
        {
          label: 'ESP32',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'ESP82',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'ESP42',
          type: 'radio',
          value: 'green',
        }
      ],
      
    });

    await alert.present();
  }

}
