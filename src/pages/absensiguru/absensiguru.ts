import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import { LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AbsensiguruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absensiguru',
  templateUrl: 'absensiguru.html',
})
export class AbsensiguruPage {
  name_user:string;
  kelas:string;
  datarombel:any=[];
  cek:number;
  datasiswa:any=[];
  tabBarElement: any;
  loading: any;

  testRadioOpen:boolean;
  testRadioResult:any;

  resposeData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage:Storage, 
    public http: HttpClient, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider
    ) {
    this.getRemoteData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsensiguruPage');
  }

  showRadio(absensi) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Absensi');
    alert.setSubTitle('Pilih alasan '+absensi.get_siswa.nama+' tidak meng-absen');

    alert.addInput({
      type: 'radio',
      label: 'Sakit',
      value: 'Sakit',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Ijin',
      value: 'Ijin',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Tanpa Keterangan',
      value: 'Tanpa Keterangan',
      checked: false
    });
    
    alert.addInput({
      type: 'radio',
      label: 'Dispensasi',
      value: 'Dispensasi',
      checked: false
    });

    alert.addButton('Batal');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  ambilData(item) {
    this.loadLoading();
    this.authService.postData({"id_rombel": item.id_rombel}, "rombel/setabsen").then((result) =>{
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.data=="success") {
        this.loading.dismiss();
        this.getRemoteData();
      } else {
        this.loading.dismiss();
      }
    }, (err) => {
      //Connection failed message
      this.loading.dismiss();
      console.log(err);
    });
  }
  peringatan() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Informasi');
    alert.setSubTitle('Absen sudah diambil!');

    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  getRemoteData(){
    this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);
        this.name_user = resposeData.name;
        this.http.get('http://153.92.4.64/api/rombel/'+resposeData.id_guru).subscribe((data:any) => {
          // console.log(data);
          this.datarombel = data.data.rombel;
          this.datasiswa = data.data.siswa;
          this.cek = data.data.cek;
          // console.log(this.datarombel);
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

}
