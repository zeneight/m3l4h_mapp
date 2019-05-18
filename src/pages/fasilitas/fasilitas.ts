import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the FasilitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fasilitas',
  templateUrl: 'fasilitas.html',
})
export class FasilitasPage {
  public item:string;
  public judul:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }

  getData(){
    let url = "http://153.92.4.64/api/fasilitas";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.item = result.data;
      // console.log(this.item.deskripsi);
    })
  }

}
