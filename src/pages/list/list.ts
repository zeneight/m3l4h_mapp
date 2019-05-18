import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [AuthServiceProvider]
})
export class ListPage {
  searchQuery: string;
  category : string = "all";
  Scrolling: boolean = true;
  loading: any;

  page: number;
  limit: number = 3;
  dataLength: number;
  maxPage: number;

  news: any=[];
  allData: any=[];
  allBySearch: any=[];

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController,
     public loadingCtrl: LoadingController,
     private newsService: AuthServiceProvider,
     private formBuilder: FormBuilder, 
     ) {

  	
    this.searchQuery = "";
    this.page = 0;
    this.loadAllData();
  
  }

  loadLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }

  loadToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

  loadAllData(){
    this.loadLoading();
    this.page = 0;
    this.news =[];
    //start find data
    this.newsService.getAll('news','berita').subscribe(
      data => {
        this.allData = data.data;
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
      () => {
        this.loading.dismiss();
        this.dataLength = this.allData.length;
        console.log('Data Length: '+this.dataLength);
        this.maxPage = Math.ceil(this.dataLength/this.limit);
        this.loadDataToShow(this.limit,this.page);
      }
    );
    
  }

  //page start from 0;
  //see constructur for initialization
  loadDataToShow(lim, pag){
    console.log("Data category saat ini: "+this.category);
    //start find data
    let start = pag * lim;
    let end = start + (lim-1);
    // if you forget, start making simple simulation 
    // for page number and data to show
    console.log('Page: '+this.page+'MaxPage:'+this.maxPage);
    if(this.maxPage > pag ){
      if (pag == (this.maxPage-1)){
        //console.log(this.allData[0]);
        if (typeof this.allData[0].error !== 'undefined'){
          this.loadToast(this.allData[0].error);
        }
        else{
          console.log('masuk sini');
          for (let i = start;i<this.dataLength;i++){
            this.news.push(this.allData[i]);
          }
        }
        
      }else{
        for (let i=start;i<=end;i++){
          this.news.push(this.allData[i]);
        }
      }
    }
    console.log('maxPage: '+this.maxPage+' page: '+pag+'');
    console.log(this.news);
    console.log('Load data to show finish!');
  }

  //load Search Event
  loadAllBySearch(){
    //start find data
    //console.log(this.searchQuery);
    this.page=0;
    var allSearchData;
    this.loadLoading();
    this.newsService.getAll('news','berita').subscribe(
      data => {
        allSearchData = data.data;
        console.log(allSearchData[0]);
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
      () => {
        
        this.loading.dismiss();
        if(typeof allSearchData[0].error !== 'undefined'){
          console.log(allSearchData[0].error);
          this.loadToast(allSearchData[0].error);
        }
        else{
          this.allData = allSearchData;
          this.dataLength = this.allData.length;
          console.log('Data length:'+this.dataLength);
          this.maxPage = Math.ceil(this.dataLength/this.limit);
          this.news = [];
          this.loadDataToShow(this.limit,this.page);
        }
        
      }
    );
  }

  sortByCategory(event){
    console.log("Data search:",this.searchQuery);
    if(this.searchQuery==""){
      this.loadAllData();  
    }
    else{
      this.loadAllBySearch();
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengumumanPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailPage,{
      item: item,
      event: event
    });
  }

  doInfinite(infiniteScroll:any) {
    if (this.page < this.maxPage){
      this.page++;
      console.log('Begin async operation');
      setTimeout(() => {
        this.loadDataToShow(this.limit, this.page);
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);

    }
    else{
      infiniteScroll.complete();
    }
    console.log(this.page);
  }
}