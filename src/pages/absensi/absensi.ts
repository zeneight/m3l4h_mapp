import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the AbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absensi',
  templateUrl: 'absensi.html',
})
export class AbsensiPage {
  absen:any=[];
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
      this.getRemoteData();
  }

  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsensiPage');
  }

  getRemoteData(){
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        // this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/absensiswa/'+resposeData.id).subscribe((data:any) => {
          this.loading.dismiss();
          console.log(data.data);
          this.absen = data.data;
          console.log(this.absen);
        });
      } else {
        console.log(resp);
      }
    });
  }

}
