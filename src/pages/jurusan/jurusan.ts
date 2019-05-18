import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the JurusanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jurusan',
  templateUrl: 'jurusan.html',
})
export class JurusanPage {
  public item:string;
  public judul:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JurusanPage');
  }
  getData(){
    let url = "http://153.92.4.64/api/jurusan";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.item = result.data;
      // console.log(this.item.deskripsi);
    })
  }

}
