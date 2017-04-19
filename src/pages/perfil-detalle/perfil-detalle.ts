import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html'
})
export class PerfilDetallePage {
  user:           any;
  playlists:      any;
  totalCanciones:   number;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public viewCtrl:  ViewController
  ) {
    this.user      = this.navParams.get('user');
    this.playlists = this.navParams.get('playlists');

    this.totalCanciones = 0;
    this.playlists.map( playlist => this.totalCanciones += playlist.nb_tracks);
  }

  ionViewDidLoad() {
  }

  close(){
    this.viewCtrl.dismiss({ retornar: "parametros al padre" });
  }

}
