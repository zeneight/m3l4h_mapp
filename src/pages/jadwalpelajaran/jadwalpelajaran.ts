import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the JadwalpelajaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwalpelajaran',
  templateUrl: 'jadwalpelajaran.html',
})
export class JadwalpelajaranPage {
  tabBarElement: any;
  // nama_mk: string;
  // hari: string;
  // jam: string;
  datamk:any=[];
  jadwal:any=[];
  loading: any;

  Scrolling: boolean = true;

  page: number;
  limit: number = 3;
  dataLength: number;
  maxPage: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage:Storage, 
    public http: Http, 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.getRemoteData();
  }

  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  loadToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

  // ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'none';
  // }

  getRemoteData(){
    this.page = 0;
    this.jadwal =[];
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);

        this.http.get('http://153.92.4.64/api/jadwalsiswa/'+resposeData.rombel).map(res => res.json()).subscribe(data => {
          this.loading.dismiss();
          // console.log(data);
          if (data.data === undefined || data.data.length == 0) {
            this.loadToast("Tidak ada jadwal pelajaran saat ini!")
          } else {
            this.jadwal = data.data;
            console.log(this.jadwal);
          }
        });
        
      } else {
        console.log(resp);
      }
    });
  }

}
