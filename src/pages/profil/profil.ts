import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { VisimisPage } from '../visimis/visimis';
import { JurusanPage } from '../jurusan/jurusan';
import { SejarahPage } from '../sejarah/sejarah';
import { FasilitasPage } from '../fasilitas/fasilitas';
/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  profile() {
    this.navCtrl.push(ProfilePage);
  }
  jurusan() {
    this.navCtrl.push(JurusanPage);
  }
  visimisi() {
    this.navCtrl.push(VisimisPage);
  }
  sejarah() {
    this.navCtrl.push(SejarahPage);
  }
  fasilitas() {
    this.navCtrl.push(FasilitasPage);
  }
  // datalain() {
  //   this.navCtrl.push(Data);
  // }

}
