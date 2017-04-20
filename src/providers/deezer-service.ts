import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DeezerService {
  public deezerAPI: string;

  constructor(public http: Http) {
    // this.deezerAPI = "https://api.deezer.com/";
    this.deezerAPI = "/deezerAPI/";
  }

  getUsers(){
    // return this.http.get('https://api.myjson.com/bins/w076v')
    return this.http.get('assets/perfiles.json')
      .map( res => res.json() )
  }

  getUserDetail(userID){
    return this.http.get(this.deezerAPI + "user/" + userID)
      .map( res => res.json() )
  }

  getUserPlaylists(userID){
    return this.http.get(this.deezerAPI + "user/" + userID + "/playlists")
      .map( res => res.json() )
  }

  getPlaylistSongs(playlistID){
    return this.http.get(this.deezerAPI + "playlist/" + playlistID + "/tracks")
      .map( res => res.json() )
  }



}
