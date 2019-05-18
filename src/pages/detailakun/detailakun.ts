import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the DetailakunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailakun',
  templateUrl: 'detailakun.html',
})
export class DetailakunPage {
  character;
  datadosen: any=[];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public http: Http
  ) { 
    this.getRemoteData();
   }

  getRemoteData(){
    this.datadosen =[];
    // this.loadLoading();
    this.storage.get('resposeData').then((resp) => {
      if(resp !== null){
        // console.log(resp);
        let resposeData = JSON.parse(resp);

        this.http.get('http://153.92.4.64/api/showgurupegawaidetail/'+resposeData.id).map(res => res.json()).subscribe(data => {
          // this.loading.dismiss();
          // console.log(data);
          if (data.data === undefined || data.data.length == 0) {
            // this.loadToast("Anda tidak mempunyai jurnal untuk diisi!")
          } else {
            this.datadosen = data.data;
            console.log(this.datadosen);
          }
        });
        
      } else {
        console.log(resp);
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
