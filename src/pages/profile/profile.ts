import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public item:string;
  public loading: any;
  public judul:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient,
    public loadingCtrl: LoadingController
    ) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getData(){
    this.loadLoading();
    let url = "http://153.92.4.64/api/info";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.item = result.data[0]['deskripsi'];
      this.judul = result.data[0]['judul'];
      // console.log(this.item.deskripsi);
      this.loading.dismiss();
    })
  }

  loadLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Tunggu...',
			//dismissOnPageChange: true
		});
		this.loading.present();
	}

}
