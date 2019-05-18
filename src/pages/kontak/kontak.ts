import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ViewChild, ElementRef} from '@angular/core';

/**
 * Generated class for the KontakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kontak',
  templateUrl: 'kontak.html',
})
export class KontakPage {
  @ViewChild('profile') profile: ElementRef;
  @ViewChild('visimisi') visimisi: ElementRef;
  @ViewChild('sejarah') sejarah: ElementRef;
  //@ViewChild('kontak') kontak: ElementRef;
  //profile: any;
  selectedItem : any;
  selectedEvent : any;
  kontak : any;
  kerjasama : any;
  loading: any;
  allData: any;
  allkerjasama: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public infoProvicer : AuthServiceProvider,
    public loadingCtrl: LoadingController
   
 ) {
   this.selectedItem = navParams.get('item');
   this.selectedEvent = navParams.get('event');
   this.loadContact();
 }
 loadLoading(){
   this.loading = this.loadingCtrl.create({
     content: 'Please wait...',
     //dismissOnPageChange: true
   });
   this.loading.present();
 }


 loadContact(){
   
     this.infoProvicer.getAll('info','kontak').subscribe(
       data => {
         this.kontak = data.data;
       },
       err => {
         console.log(err);
         this.loading.dismiss();
       },
       () => {          
          
       }
     )
   
 }
 

 openLink(event ,item){
   if(item.name == "Website"){
   //  this.iab.create(item.value, '_system');    
   window.open(item.value,'_system');
     console.log('Website');
   }
   else if(item.name == "Telepon"){
     // window.open(item.value,'_system');
     window.open('tel:${'+item.value+'}','_system');
     
     console.log('Telepon');
   }
   else if(item.name == "Facebook"){
    window.open(item.value,'_system');    
     console.log('Facebook');
   }
   else if(item.name == "Instagram"){
     window.open(item.value,'_system');
     console.log('Instagram');
   }
   else if(item.name == "Youtube"){
     window.open(item.value,'_system');
     console.log('Youtube');
   }
   else if(item.name == "Alamat"){
     window.open("https://goo.gl/maps/PPzdzsKXBem",'_system');
     console.log('Alamat');
   }
   
   if(item.name == "Email"){
    window.open('mailto:${'+item.value+'}','_system');
     console.log('Email');
   }
 }


 ionViewDidLoad() {
   console.log('ionViewDidLoad KontakPage');
 }

}
