import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { PlaylistsPage } from '../playlists/playlists';

import { DeezerService } from '../../providers/deezer-service';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/merge';

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerService ]
})
export class PerfilesPage {
  public users: any;
  public loader: any;

  constructor(
    public navCtrl:     NavController,
    public navParams:   NavParams,
    public ds:          DeezerService,
    public loadingCtrl: LoadingController
  ) {
    this.users = [];

    this.loader = this.loadingCtrl.create();
  }

  goToPlaylist(user) {
    this.navCtrl.push(PlaylistsPage, { user: user });
  }

  ionViewDidLoad() {
    this.loader.present();

    this.ds.getUsers().subscribe( usersIDs => {
      // usersIDs.map( userID => {
      //   this.ds.getUserDetail(userID).subscribe( user => {
      //     this.users.push(user);
      //   });
      // });

      let sources = usersIDs.map( userID => this.ds.getUserDetail(userID) );
      Observable.merge(...sources).subscribe(
        data  => this.users.push(data),
        error => console.log(error),
        ()    => this.loader.dismiss()
      );
    });

  }

}
