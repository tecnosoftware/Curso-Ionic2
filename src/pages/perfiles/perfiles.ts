import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaylistsPage } from '../playlists/playlists';

import { DeezerService } from '../../providers/deezer-service';

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerService ]
})
export class PerfilesPage {
  public users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService
  ) {
    this.users = [];
  }

  goToPlaylist(user) {
    this.navCtrl.push(PlaylistsPage, { user: user });
  }

  ionViewDidLoad() {

    this.ds.getUsers().subscribe( usersIDs => {
      usersIDs.map( userID => {
        this.ds.getUserDetail(userID).subscribe( user => {
          this.users.push(user);
        });
      });
    });

  }

}
