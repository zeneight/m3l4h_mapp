import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ProfiledetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiledetail',
  templateUrl: 'profiledetail.html',
})
export class ProfiledetailPage {
  public items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfiledetailPage');
  }
  getData(){
    let url = "http://153.92.4.64/api/info";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result.data;
      // console.log(result.data);
    })
  }

}
