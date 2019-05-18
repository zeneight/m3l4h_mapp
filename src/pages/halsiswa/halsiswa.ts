import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailakunPage } from '../detailakun/detailakun';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the HalsiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-halsiswa',
  templateUrl: 'halsiswa.html',
})
export class HalsiswaPage {
  name_user:string;
  id_user:number;
  datasiswa:any=[];
  tabBarElement: any;

  constructor(
    public navCtrl: NavController, 
    private storage:Storage, 
    public http: HttpClient, 
    public modalCtrl: ModalController
  ) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.getRemoteData();
  }

  openModal(chn) {
    let modal = this.modalCtrl.create(DetailakunPage, chn);
    modal.present();
  }

  getRemoteData(){
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/showsiswadetail/'+resposeData.id).subscribe((data:any) => {
          // console.log(data);
          this.datasiswa = data.data;
          console.log(this.datasiswa);
        });
      } else {
        console.log(resp);
      }
    });
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  takeMeBack() {
    this.navCtrl.pop();
    this.storage.clear().then((val) => {
        console.log(val);
    });
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  // jadwalMengajar(){
  // 	this.navCtrl.push(JadwalmengajarPage);
  // }
  // jurnalKbm(){
  // 	this.navCtrl.push(JurnalkbmPage);
  // }

}
