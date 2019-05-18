import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import { FaqPage } from '../faq/faq';
import { AplikasiPage } from '../aplikasi/aplikasi';

/**
 * Generated class for the PengaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pengaturan',
  templateUrl: 'pengaturan.html',
})
export class PengaturanPage {
  loading: any;

  constructor(public navCtrl: NavController, private storage:Storage, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPage');
  }
  loadLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Tunggu...',
			//dismissOnPageChange: true
		});
		this.loading.present();
	}

  takeMeBack() {
    this.loadLoading();
    this.navCtrl.pop();
    this.storage.clear().then((val) => {
        console.log('datanya: '+val);
    });
    this.navCtrl.setRoot(LoginPage);
    this.loading.dismiss();
  }
  faq(){
    this.navCtrl.push(FaqPage);
  }
  aplikasi(){
    this.navCtrl.push(AplikasiPage);
  }

}
