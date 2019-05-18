import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef} from '@angular/core';
/**
 * Generated class for the BursaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bursa-detail',
  templateUrl: 'bursa-detail.html',
})
export class BursaDetailPage {
  @ViewChild('deskripsi') deskripsi: ElementRef;
  selectedItem : any;
  selectedEvent: any;
  

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {
    this.selectedItem = navParams.get('item');
    this.selectedEvent = navParams.get('event');
    // console.log(this.selectedEvent);
    var obj = this.selectedItem.deskripsi;
    var test= Object.keys(obj).map(function (key) { return obj[key]; });
    // console.log(test);
    setTimeout(() => {
      this.deskripsi.nativeElement.innerHTML = obj;
    }, 500);
  	this.selectedEvent = navParams.get('event');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BursaDetailPage');
  }

}
