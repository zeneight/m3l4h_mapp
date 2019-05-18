import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DetailakunPage } from '../detailakun/detailakun';
import { AbsensiPage } from '../absensi/absensi';
import { JadwalpelajaranPage } from '../jadwalpelajaran/jadwalpelajaran';
import { PembayaranPage } from '../pembayaran/pembayaran';

import { HttpClient } from '@angular/common/http';
import { TabunganPage } from '../tabungan/tabungan';
import { PengaturanPage } from '../pengaturan/pengaturan';

/**
 * Generated class for the AkunsiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-akunsiswa',
	templateUrl: 'akunsiswa.html',
})
export class AkunsiswaPage {
	tabBarElement: any;
	name_user:string;
  id_user:number;
  datasiswa:any=[];

	constructor(public navCtrl: NavController, private storage:Storage, public http: HttpClient, public modalCtrl: ModalController) {
    // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.getRemoteData();
	}
	
	// ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'flex';
  // }

  takeMeBack() {
    this.navCtrl.pop();
    this.storage.clear().then((val) => {
        console.log(val);
    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
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
        this.http.get('http://153.92.4.64/api/siswa/'+resposeData.id).subscribe((data:any) => {
          // console.log(data);
          this.datasiswa = data.data;
          console.log(this.datasiswa);
        });
      } else {
        console.log(resp);
      }
    });
  }
  jadwalPelajaran(){
  	this.navCtrl.push(JadwalpelajaranPage);
  }
  absensi(){
  	this.navCtrl.push(AbsensiPage);
  }
  pembayaran(){
  	this.navCtrl.push(PembayaranPage);
  }
  tabungan(){
  	this.navCtrl.push(TabunganPage);
  }
  pengaturan(){
    this.navCtrl.push(PengaturanPage);
  }

}
