import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { CancionesPage } from '../canciones/canciones';

import { DeezerService } from '../../providers/deezer-service';

@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerService ]
})
export class PlaylistsPage {
  public user: any;
  public playlists: any;

  constructor(
    public navCtrl:     NavController,
    public navParams:   NavParams,
    public ds:          DeezerService,
    public loadingCtrl: LoadingController
    ) {
      this.user      = this.navParams.get('user');
      this.playlists = [];
    }

  goToCanciones(playlist){
    this.navCtrl.push(CancionesPage, { playlist: playlist });
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ds.getUserPlaylists(this.user.id).subscribe( data => {
      this.playlists = data.data;
      loader.dismiss();
    })
    
  }

}
