import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BursaDetailPage } from '../bursa-detail/bursa-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the BursaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bursa',
  templateUrl: 'bursa.html',
})
export class BursaPage {
  category: string;
  ikalData: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public ikalProvider: AuthServiceProvider,
    public loadingCtrl: LoadingController) {
      
        this.category = 'all';
        this.loadAllData();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BursaPage');
  }
  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  loadAllData(){
    this.loadLoading();
    this.ikalData =[];
    //start find data
    this.ikalProvider.getAll('showikal',this.category).subscribe(
      data => {
        this.ikalData = data.data;
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
      () => {
        this.loading.dismiss();
      }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(BursaDetailPage,{
      item: item,
      event: event
    });
  }
}