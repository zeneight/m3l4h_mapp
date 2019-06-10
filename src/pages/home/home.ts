import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ProfilPage } from '../profil/profil';
import { PmbPage } from '../pmb/pmb';
import { KontakPage } from '../kontak/kontak';
import { BursaPage } from '../bursa/bursa';
import { EbookPage } from '../ebook/ebook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PushProvider } from '../../providers/pushProvider';
import { AlertController } from 'ionic-angular';

import { NotifikasiPage } from '../notifikasi/notifikasi';
import { BeritaDetailPage } from '../berita-detail/berita-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public items : any;
  jmlNotifikasi: number;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpClient,
     public PushProvider: PushProvider,
     private alertCtrl: AlertController
     ) {
    this.getData();
    this.getNotif();
  }
  getData(){
    let url = "http://153.92.4.64/api/slider";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result.data;
      // console.log(result.data);
    })
  }
  ionViewDidEnter(){
    this.getNotif();

    // if(this.PushProvider.landing_page != undefined){
    //   console.log('on home if',this.PushProvider.landing_page);
    //   this.navCtrl.push('offerzonePage',{ from_tab: this.PushProvider.landing_page});
    // }
    // if(this.PushProvider.product_id != undefined){
    //   console.log('on home if',this.PushProvider.product_id);
    //   this.navCtrl.push('ProductPage',{ product_id: this.PushProvider.product_id });
    // }
    if(this.PushProvider.notifikasi_page != undefined){
      this.itemTapped('', this.PushProvider.notifikasi_page);
    }
  }
  itemTapped(event, item) {
    this.navCtrl.push(BeritaDetailPage,{
      item: item,
      event: event
    });
  }
  presentAlert(item) {
    let alert = this.alertCtrl.create({
      title: 'Pemberitahuan',
      subTitle: item,
      buttons: ['Tutup']
    });
    alert.present();
  }
  getNotif(){
    let url = "http://153.92.4.64/api/notifikasi/jumlah";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.jmlNotifikasi = result.data.jumlah;
      // console.log(result.data);
    })
  }
  notifikasi(){
  	this.navCtrl.push(NotifikasiPage);
  }

  list(){
  	this.navCtrl.push(ListPage);
  }
  Profile(){
  	this.navCtrl.push(ProfilPage);
  }
  PMB(){
  	this.navCtrl.push(PmbPage);
  }
  kontak(){
  	this.navCtrl.push(KontakPage);
  }
  Bursa(){
  	this.navCtrl.push(BursaPage);
  }
  EBook(){
  	this.navCtrl.push(EbookPage);
  }

}
