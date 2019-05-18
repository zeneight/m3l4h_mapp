import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the TabunganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabungan',
  templateUrl: 'tabungan.html',
})
export class TabunganPage {
  tabungan:any[]=[];
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public http: HttpClient,
    public loadingCtrl: LoadingController
    ) {
      this.getRemoteData();
  }
  
  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Tunggu Sebentar...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabunganPage');
  }

  getRemoteData(){
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        // this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/tabungansiswa/'+resposeData.id).subscribe((data:any) => {
          console.log(data.data);
          this.tabungan = data.data;
          console.log(this.tabungan);
        });
        this.loading.dismiss();
      } else {
        console.log(resp);
      }
    });
  }


}
