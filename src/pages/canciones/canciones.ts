import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DeezerService } from '../../providers/deezer-service';

@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerService ]
})
export class CancionesPage {
  public playlist: any;
  public songs: any;

  constructor(
    public navCtrl:     NavController,
    public navParams:   NavParams,
    public ds:          DeezerService,
    public loadingCtrl: LoadingController
    ) {
      this.playlist = this.navParams.get('playlist')
      this.songs    = []; 
    }

  ionViewDidLoad() {
    let loader= this.loadingCtrl.create();
    loader.present();
    this.ds.getPlaylistSongs(this.playlist.id).subscribe( data => {
      this.songs = data.data;
      loader.dismiss();
    })
  }

}
