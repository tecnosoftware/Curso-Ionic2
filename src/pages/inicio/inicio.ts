import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(
    public navCtrl:   NavController,
    public navParams: NavParams
  ){

  }

  ionViewDidLoad() {
    console.log('Inicio page esta cargada');
  }

}
