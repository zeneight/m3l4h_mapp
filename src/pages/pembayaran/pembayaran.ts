import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {
  spp:any=[];
  sppsudah:any=[];
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
      this.getRemoteData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
  }

  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Tunggu Sebentar...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  getRemoteData(){
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        // this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/pembayaransiswa/'+resposeData.id).subscribe((data:any) => {
          // console.log(data);
          this.spp = data.data;
          console.log(this.spp);
        });

        this.http.get('http://153.92.4.64/api/pembayaransiswasudah/'+resposeData.id).subscribe((data:any) => {
          // console.log(data);
          this.sppsudah = data.data;
          console.log(this.sppsudah);
        });
        this.loading.dismiss();
      } else {
        console.log(resp);
      }
    });
  }

}
