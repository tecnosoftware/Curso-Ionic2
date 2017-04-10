import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html'
})
export class ContactoPage {

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  enviar(){
    let alert = this.alertCtrl.create({
      title:    'Contacto',
      subTitle: 'Su peticion ha sido enviada exitosamente!',
      buttons:  ['OK']
    });
    alert.present();
  }

}
