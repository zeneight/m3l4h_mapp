import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the SejarahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sejarah',
  templateUrl: 'sejarah.html',
})
export class SejarahPage {
  public item:string;
  public judul:string;

  constructor(
    public navParams: NavParams, 
    public http: HttpClient,
    // private p: ProfilePage,
  ) 
    {
      this.getData();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getData(){
    // this.p.loadLoading();
    let url = "http://153.92.4.64/api/info";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.item = result.data[2]['deskripsi'];
      this.judul = result.data[2]['judul'];
      // console.log(this.item.deskripsi);
      // this.p.loading.dismiss();
    })
  }
}
