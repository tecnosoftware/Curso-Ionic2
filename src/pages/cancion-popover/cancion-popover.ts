import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-cancion-popover',
  templateUrl: 'cancion-popover.html'
})
export class CancionPopoverPage {
  volumen: number;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public viewCtrl:  ViewController
  ) {
    this.volumen = 100;
  }

  ionViewDidLoad() {
  }

  onRangeChange(event){
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
