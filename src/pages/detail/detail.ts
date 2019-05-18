import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  ann: any;
  selectEvent: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.ann = navParams.get('item');
    console.log (this.ann);
    this.selectEvent = navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
