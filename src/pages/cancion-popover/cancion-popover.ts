import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

@Component({
  selector: 'page-cancion-popover',
  templateUrl: 'cancion-popover.html'
})
export class CancionPopoverPage {
  volumen: number;

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams,
    public viewCtrl:  ViewController,
    public events:    Events
  ) {
    this.volumen = 100;
  }

  ionViewDidLoad() {
  }

  onRangeChange(event){
    this.events.publish('cambio:volumen', this.volumen);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
