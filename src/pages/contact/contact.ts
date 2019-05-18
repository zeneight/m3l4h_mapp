import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailakunPage } from '../detailakun/detailakun';

import { LoginPage } from '../login/login';
import { JadwalmengajarPage } from '../jadwalmengajar/jadwalmengajar';
import { JurnalkbmPage } from '../jurnalkbm/jurnalkbm';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { PengaturanPage } from '../pengaturan/pengaturan';

import { LoadingController } from 'ionic-angular';
import { AbsensiguruPage } from '../absensiguru/absensiguru';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  name_user:string;
  id_user:number;
  datadosen:any=[];
  tabBarElement: any;
  loading: any;

  // role:string;
  // deviceObj: any=[];

  constructor(public navCtrl: NavController, private storage:Storage, public http: HttpClient, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.getRemoteData();
  }

  openModal(chn) {
    let modal = this.modalCtrl.create(DetailakunPage, chn);
    modal.present();
  }

  getRemoteData(){
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/showgurupegawaidetail/'+resposeData.id).subscribe((data:any) => {
          // console.log(data);
          this.datadosen = data.data;
          console.log(this.datadosen);
          this.loading.dismiss();
        });
      } else {
        console.log(resp);
        this.loading.dismiss();
      }
    });
  }
  loadLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Tunggu...',
			//dismissOnPageChange: true
		});
		this.loading.present();
	}

  // ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'flex';
  // }

  jadwalMengajar(){
  	this.navCtrl.push(JadwalmengajarPage);
  }
  jurnalKbm(){
  	this.navCtrl.push(JurnalkbmPage);
  }
  pengaturan(){
    this.navCtrl.push(PengaturanPage);
  }
  absensi(){
    this.navCtrl.push(AbsensiguruPage);
  }
}