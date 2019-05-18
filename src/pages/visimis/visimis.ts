import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the VisimisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visimis',
  templateUrl: 'visimis.html',
})
export class VisimisPage {
  public item:string;
  public judul:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getData(){
    let url = "http://153.92.4.64/api/info";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.item = result.data[1]['deskripsi'];
      this.judul = result.data[1]['judul'];
      // console.log(this.item.deskripsi);
    })
  }
}