import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BursaPage } from '../pages/bursa/bursa';
import { ProfilPage } from '../pages/profil/profil';
import { EbookPage } from '../pages/ebook/ebook';
import { PmbPage } from '../pages/pmb/pmb';
import { KontakPage } from '../pages/kontak/kontak';
import { SejarahPage } from '../pages/sejarah/sejarah';
import { VisimisPage } from '../pages/visimis/visimis';
import { JurusanPage } from '../pages/jurusan/jurusan';
import { BursaDetailPage } from '../pages/bursa-detail/bursa-detail';
import { BeritaDetailPage } from '../pages/berita-detail/berita-detail';
import { DetailakunPage } from '../pages/detailakun/detailakun';
import { AkunsiswaPage } from '../pages/akunsiswa/akunsiswa';
import { JadwalpelajaranPage } from '../pages/jadwalpelajaran/jadwalpelajaran';

import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { JadwalmengajarPage } from '../pages/jadwalmengajar/jadwalmengajar';
import { JurnalkbmPage } from '../pages/jurnalkbm/jurnalkbm';
import { AbsensiPage } from '../pages/absensi/absensi';

import { PembayaranPage } from '../pages/pembayaran/pembayaran';
import { ProfilePage } from '../pages/profile/profile';
import { FasilitasPage } from '../pages/fasilitas/fasilitas';
import { HalkosongPage } from '../pages/halkosong/halkosong';

import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { OneSignal } from '@ionic-native/onesignal';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TabunganPage } from '../pages/tabungan/tabungan';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { AplikasiPage } from '../pages/aplikasi/aplikasi';
import { FaqPage } from '../pages/faq/faq';
import { AbsensiguruPage } from '../pages/absensiguru/absensiguru';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ListPage,
    DetailPage,
    TabsPage,
    BursaPage,
    ProfilPage,
    EbookPage,
    PmbPage,
    KontakPage,
    SejarahPage,
    VisimisPage,
    JurusanPage,
    BursaDetailPage,
    BeritaDetailPage,
    DetailakunPage,
    JadwalmengajarPage,
    NotifikasiPage,
    JurnalkbmPage,
    AkunsiswaPage,
    JadwalpelajaranPage,
    AbsensiPage,
    PembayaranPage,
    ProfilePage,
    FasilitasPage,
    HalkosongPage,
    TabunganPage,
    PengaturanPage,
    AplikasiPage,
    FaqPage,
    AbsensiguruPage
  ],
  imports: [
    BrowserModule, HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ListPage,
    DetailPage,
    TabsPage,
    BursaPage,
    ProfilPage,
    EbookPage,
    PmbPage,
    KontakPage,
    SejarahPage,
    VisimisPage,
    JurusanPage,
    BursaDetailPage,
    BeritaDetailPage,
    DetailakunPage,
    JadwalmengajarPage,
    NotifikasiPage,
    JurnalkbmPage,
    AkunsiswaPage,
    JadwalpelajaranPage,
    AbsensiPage,
    PembayaranPage,
    ProfilePage,
    FasilitasPage,
    HalkosongPage,
    TabunganPage,
    PengaturanPage,
    AplikasiPage,
    FaqPage,
    AbsensiguruPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    OneSignal,
    ProfilePage
  ]
})
export class AppModule {}
