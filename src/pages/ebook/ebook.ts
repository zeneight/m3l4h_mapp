import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the EbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ebook',
  templateUrl: 'ebook.html',
  providers: [AuthServiceProvider]
})
export class EbookPage {
  page: number;
  limit: number = 100;
  dataLength: number;
  maxPage: number;

  searchQuery: string;
  categoryBuku : string = "ALL";

  books: any;
  loading: any;
  allData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private bookService: AuthServiceProvider,
  ) {
    this.searchQuery = "";
    this.loadAll();
    this.page = 0;
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

  loadAll(){
    this.loadLoading();
    this.page = 0;
    this.books =[];
    //start find data
    this.bookService.getAll('downloadbuku',this.categoryBuku).subscribe(
      data => {
        this.allData = data.data;
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      },
      () => {
        console.log(this.allData);
        this.loading.dismiss();
        this.dataLength = this.allData.length;
        console.log('Data Length: '+this.dataLength);
        this.maxPage = Math.ceil(this.dataLength/this.limit);
        this.loadDataToShow(this.limit,this.page);
      }
    );
  }

  loadDataToShow(lim, pag){
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
            this.books.push(this.allData[i]);
          }
        }
        
      }else{
        for (let i=start;i<=end;i++){
          this.books.push(this.allData[i]);
        }
      }
    }
    console.log('Load data to show finish!');
  }
  
  sortByKelas(){
    if(this.searchQuery==""){
      this.loadAll();  
    }
    else{
      this.loadAllBySearch();
    }
  }

  loadAllBySearch(){
    this.page=0;
    var allSearchData;
    this.loadLoading();
    console.log(this.categoryBuku);
    console.log(this.searchQuery); 
    var link;
    if (this.searchQuery == ""){
      link = 'downloadbuku/';
    }
    else{
       link = 'downloadbuku/'+this.searchQuery;
    }
    this.bookService.getAll(link,this.categoryBuku).subscribe(
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
          this.books = [];
          this.loadDataToShow(this.limit,this.page);
        }
        
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EbookPage');
  }

}
