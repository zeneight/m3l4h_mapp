import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { ContactPage } from '../contact/contact';
import { AkunsiswaPage } from '../akunsiswa/akunsiswa';
import { AkunkepsekPage } from '../akunkepsek/akunkepsek';

import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	resposeData : any;
	tipe: number;
	cek: boolean;
	// datanya: string;
	loading: any;
	userData = {"email":"", "password":""};

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private toastCtrl:ToastController, 
		public authService:AuthServiceProvider, 
		private storage:Storage, 
		public loadingCtrl: LoadingController
		) {
			this.getRemoteData()
		}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
	loadLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Tunggu...',
			//dismissOnPageChange: true
		});
		this.loading.present();
	}
	getRemoteData(){
		console.log("Its work!");
		this.storage.get('resposeData').then((resp) => {
			if(resp == null){
				console.log('kosong: '+resp);
				this.cek = false;
			} else {
				this.loadLoading();
				console.log('ada: '+resp);
				this.cek = true;
				let datanya = JSON.parse(resp);
				if(datanya.role=="siswa") this.tipe = 0;
				else if(datanya.role=="guru") this.tipe = 1;
				else if(datanya.role=="kepsek") this.tipe = 2;
				console.log(this.tipe);
				this.loading.dismiss();
			}
		});
	}

	login(){
		this.loadLoading();
		this.storage.clear().then((val) => {
			console.log(val);
		});

		if (this.userData.email && this.userData.password) {
			this.authService.postData(this.userData, "auth/login").then((result) =>{
				this.resposeData = result;
				console.log(this.resposeData);
				if (this.resposeData.data.status=="Login berhasil!") {
					this.storage.set('resposeData', JSON.stringify(this.resposeData.data));
					this.loading.dismiss();
					if (this.resposeData.data.role=="guru") {
						this.navCtrl.setRoot(ContactPage);
					} else if (this.resposeData.data.role=="siswa") {
						this.navCtrl.setRoot(AkunsiswaPage);
					} else if (this.resposeData.data.role=="kepsek") {
						this.navCtrl.setRoot(AkunkepsekPage);
					} else {
						this.presentToast("Maaf, Anda tidak dapat mengakses halaman ini!");
					}
					// this.storage.get('resposeData').then((val) => {
					// 	if (val != null) {

					// 	}
					// })
				} else {
					this.loading.dismiss();
					this.presentToast("e-mail/password salah!");
				}
			}, (err) => {
				//Connection failed message
				this.loading.dismiss();
				this.presentToast("e-mail/password salah!");
			});
		} else {
			this.loading.dismiss();
			this.presentToast("e-mail/password tidak boleh kosong!");
		}
	}
	presentToast(msg) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

}
