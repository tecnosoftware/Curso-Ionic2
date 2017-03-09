import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaylistsPage } from '../playlists/playlists';

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html'
})
export class PerfilesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  goToPlaylist(userID) {
    this.navCtrl.push(PlaylistsPage, { userID: userID });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilesPage');
  }

}
