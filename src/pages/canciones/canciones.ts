import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html'
})
export class CancionesPage {
  public playlistID: number;
  constructor(
    public navCtrl: NavController, public navParams: NavParams
    ) {
      this.playlistID = this.navParams.get('playlistID')
      console.log(this.playlistID);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

}
