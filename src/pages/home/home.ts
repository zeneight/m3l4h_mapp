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

import { NotifikasiPage } from '../notifikasi/notifikasi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items : any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpClient,
     ) {
    this.getData();
  }

  getData(){
    let url = "http://153.92.4.64/api/slider";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result.data;
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
