import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Ion } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { HalkosongPage } from '../halkosong/halkosong';
import { BeritaDetailPage } from '../berita-detail/berita-detail';

/**
 * Generated class for the NotifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifikasi',
  templateUrl: 'notifikasi.html',
})
export class NotifikasiPage {
  public items : any;
  resposeData : any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public authService:AuthServiceProvider, public loadingCtrl: LoadingController) {
    this.getData();
  }
  ionViewDidEnter(){
    this.getData();
  }
  getData(){
    let url = "http://153.92.4.64/api/notifikasi";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result.data;
      console.log(result.data);
    })
  }

  itemTapped(event, item) {
    this.loadLoading();
    this.authService.postData({"idNews": item.id}, "notifikasi/update").then((result) =>{
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.data.status=="success") {
        this.loading.dismiss();
        this.navCtrl.push(BeritaDetailPage,{
          item: item,
          event: event
        });
      } else {
        this.loading.dismiss();
      }
    }, (err) => {
      //Connection failed message
      this.loading.dismiss();
      console.log(err);
    });
  }
  loadLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Tunggu...',
			//dismissOnPageChange: true
		});
		this.loading.present();
	}

}
