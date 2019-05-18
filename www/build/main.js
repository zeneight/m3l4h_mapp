webpackJsonp([32],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsensiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AbsensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsensiPage = /** @class */ (function () {
    function AbsensiPage(navCtrl, navParams, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.absen = [];
        this.getRemoteData();
    }
    AbsensiPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    AbsensiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbsensiPage');
    };
    AbsensiPage.prototype.getRemoteData = function () {
        var _this = this;
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                // this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/absensiswa/' + resposeData.id).subscribe(function (data) {
                    _this.loading.dismiss();
                    console.log(data.data);
                    _this.absen = data.data;
                    console.log(_this.absen);
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    AbsensiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-absensi',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/absensi/absensi.html"*/'<!--\n  Generated template for the AbsensiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>Absensi</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n    <ion-list class="atas">\n      <ion-item>\n        <div class="judul-saldo">Rekap Absensi Bulan {{ absen.bulan }} {{ absen.tahun }}</div>\n      </ion-item>\n    </ion-list>\n\n    <div class="grid">\n      <div class="row responsive-sm">\n        <div class="col">\n          <div class="card">\n            <h1>{{ absen.masuk }}</h1>\n            <span>kali</span>\n            <div class="text">Hadir</div>\n          </div>\n        </div>\n        <div class="col">\n          <div class="card">\n            <h1>{{ absen.tidak_masuk }}</h1>\n            <span>kali</span>\n            <div class="text">Tidak Hadir</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ion-list class="detail-absensi">\n      <ion-list-header class="judul-transaksi">\n        <div class="left">Informasi tidak hadir</div>\n        <div class="right"></div>\n      </ion-list-header>\n      <ion-item>\n        <ion-icon name="people" item-start></ion-icon>\n        <b>{{ absen.dispensasi }}</b> kali Dispensasi\n      </ion-item>\n      <ion-item>\n        <ion-icon name="people" item-start></ion-icon>\n        <b>{{ absen.sakit }}</b> kali Sakit\n      </ion-item>\n      <ion-item>\n        <ion-icon name="people" item-start></ion-icon>\n        <b>{{ absen.ijin }}</b> kali Ijin\n      </ion-item>\n      <ion-item>\n        <ion-icon name="people" item-start></ion-icon>\n        <b>{{ absen.alpha }}</b> kali Tanpa Keterangan\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n      <ion-list-header class="judul-transaksi">\n        <div class="left">Riwayat Absensi</div>\n        <div class="right"></div>\n      </ion-list-header>\n      <ion-item *ngFor="let ann of absen.detail_masuk">\n        <h4><b>{{ ann.hari }}, {{ ann.tanggal }}</b></h4>\n        <p>\n          Keterangan:\n          <span *ngIf="ann?.alasan"><b>{{ ann.alasan }}</b></span>\n          <span *ngIf="(ann.alasan == null && ann.keterangan == 0)"><b>Tanpa Keterangan</b></span>\n          <span *ngIf="(ann.alasan == null && ann.keterangan == 1)"><b>Hadir</b></span>\n          <br>\n          Jam Datang: <b>{{ ann.jam_datang }}</b><br>\n          Jam Pulang: <b>{{ ann.jam_pulang }}</b><br>\n          Tidak Mengikuti Mapel: <b>-</b><br>\n\n        </p>\n      </ion-item>\n    </ion-list>\n  \n  </ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/absensi/absensi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], AbsensiPage);
    return AbsensiPage;
}());

//# sourceMappingURL=absensi.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsensiguruPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AbsensiguruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbsensiguruPage = /** @class */ (function () {
    function AbsensiguruPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbsensiguruPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbsensiguruPage');
    };
    AbsensiguruPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-absensiguru',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/absensiguru/absensiguru.html"*/'<!--\n  Generated template for the AbsensiguruPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Absen Siswa</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/absensiguru/absensiguru.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AbsensiguruPage);
    return AbsensiguruPage;
}());

//# sourceMappingURL=absensiguru.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AplikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AplikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AplikasiPage = /** @class */ (function () {
    function AplikasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AplikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AplikasiPage');
    };
    AplikasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aplikasi',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/aplikasi/aplikasi.html"*/'<!--\n  Generated template for the AplikasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tentang Melah</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/aplikasi/aplikasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AplikasiPage);
    return AplikasiPage;
}());

//# sourceMappingURL=aplikasi.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AkunsiswaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailakun_detailakun__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__absensi_absensi__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jadwalpelajaran_jadwalpelajaran__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pembayaran_pembayaran__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabungan_tabungan__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pengaturan_pengaturan__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the AkunsiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AkunsiswaPage = /** @class */ (function () {
    function AkunsiswaPage(navCtrl, storage, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.datasiswa = [];
        // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = 'none';
    // }
    // ionViewWillLeave() {
    //   this.tabBarElement.style.display = 'flex';
    // }
    AkunsiswaPage.prototype.takeMeBack = function () {
        this.navCtrl.pop();
        this.storage.clear().then(function (val) {
            console.log(val);
        });
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    AkunsiswaPage.prototype.openModal = function (chn) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detailakun_detailakun__["a" /* DetailakunPage */], chn);
        modal.present();
    };
    AkunsiswaPage.prototype.getRemoteData = function () {
        var _this = this;
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/siswa/' + resposeData.id).subscribe(function (data) {
                    // console.log(data);
                    _this.datasiswa = data.data;
                    console.log(_this.datasiswa);
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    AkunsiswaPage.prototype.jadwalPelajaran = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jadwalpelajaran_jadwalpelajaran__["a" /* JadwalpelajaranPage */]);
    };
    AkunsiswaPage.prototype.absensi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__absensi_absensi__["a" /* AbsensiPage */]);
    };
    AkunsiswaPage.prototype.pembayaran = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pembayaran_pembayaran__["a" /* PembayaranPage */]);
    };
    AkunsiswaPage.prototype.tabungan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabungan_tabungan__["a" /* TabunganPage */]);
    };
    AkunsiswaPage.prototype.pengaturan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pengaturan_pengaturan__["a" /* PengaturanPage */]);
    };
    AkunsiswaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-akunsiswa',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/akunsiswa/akunsiswa.html"*/'<!--\n  Generated template for the AkunsiswaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar hideBackButton>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="pengaturan()">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="bg-style">\n  <div class="bg-merah"></div>\n  <ion-item class="padding-top dashboard">\n    <ion-thumbnail style="min-height: unset;">\n      <img class="foto-profil" src="http://153.92.4.64/img/avatar.png">\n    </ion-thumbnail>\n    <h3>{{ name_user }}</h3>\n    <p>{{ datasiswa.nis }}</p>\n    <br>\n    <div class="tombol" (click)="openModal({charNum: 0})">\n      <ion-icon name="eye"></ion-icon> \n      Detail Akun\n    </div>\n  </ion-item>\n\n  <div class="grid">\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card" (click)="jadwalPelajaran()">\n          <!-- <img src="assets/imgs/icons/berita.png"> -->\n          <ion-icon name="paper"></ion-icon>\n					<div class="text">Jadwal Belajar</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card" (click)="absensi()">\n          <!-- <img src="assets/imgs/icons/Ebook.png"> -->\n          <ion-icon name="filing"></ion-icon>\n					<div class="text">Absensi</div>\n				</div>\n			</div>\n		</div>\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card"(click)="pembayaran()">\n          <!-- <img src="assets/imgs/icons/bursakerja.png"> -->\n          <ion-icon name="cash"></ion-icon>\n					<div class="text">Pembayaran</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card" (click)="tabungan()">\n          <!-- <img src="assets/imgs/icons/kontak.png"> -->\n          <ion-icon name="bookmarks"></ion-icon>\n					<div class="text">Tabungan</div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n  <!-- <ion-list>\n    <ion-item (click)="jadwalPelajaran()">\n      <ion-icon name=\'bookmarks\' color="danger" item-start></ion-icon>\n      Jadwal Pelajaran\n      <ion-note item-end><small>Jadwal Pelajaran Anda</small></ion-note>\n    </ion-item>\n    \n    <ion-item (click)="absensi()">\n        <ion-icon name=\'albums\' color="danger" item-start></ion-icon>\n        Absensi\n        <ion-note item-end><small>Absensi</small></ion-note>\n      </ion-item>\n\n    <ion-item (click)="pembayaran()">\n      <ion-icon name=\'body\' color="danger" item-start></ion-icon>\n      Pembayaran\n      <ion-note item-end><small>Pembayaran</small></ion-note>\n    </ion-item>\n\n    <ion-item (click)="tabungan()">\n      <ion-icon name=\'chatbubbles\' color="danger" item-start></ion-icon>\n      Tabungan\n      <ion-note item-end><small>Tabungan</small></ion-note>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <ion-row>\n    <ion-col><ion-icon name="ionic" color="primary"></ion-icon></ion-col>\n    <ion-col><ion-icon name="logo-angular"></ion-icon></ion-col>\n    <ion-col><ion-icon name="heart" color="danger"></ion-icon></ion-col>\n    <ion-col><ion-icon name="ionitron" color="primary"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="happy" color="vibrant"></ion-icon></ion-col>\n    <ion-col><ion-icon name="people"></ion-icon></ion-col>\n    <ion-col><ion-icon name="person"></ion-icon></ion-col>\n    <ion-col><ion-icon name="contact"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="apps"></ion-icon></ion-col>\n    <ion-col><ion-icon name="lock"></ion-icon></ion-col>\n    <ion-col><ion-icon name="key" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="unlock"></ion-icon></ion-col>\n  </ion-row> -->\n  \n\n  \n \n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/akunsiswa/akunsiswa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AkunsiswaPage);
    return AkunsiswaPage;
}());

//# sourceMappingURL=akunsiswa.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JadwalpelajaranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JadwalpelajaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JadwalpelajaranPage = /** @class */ (function () {
    function JadwalpelajaranPage(navCtrl, navParams, storage, http, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // nama_mk: string;
        // hari: string;
        // jam: string;
        this.datamk = [];
        this.jadwal = [];
        this.Scrolling = true;
        this.limit = 3;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    JadwalpelajaranPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    JadwalpelajaranPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = 'none';
    // }
    // ionViewWillLeave() {
    //   this.tabBarElement.style.display = 'none';
    // }
    JadwalpelajaranPage.prototype.getRemoteData = function () {
        var _this = this;
        this.page = 0;
        this.jadwal = [];
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.http.get('http://153.92.4.64/api/jadwalsiswa/' + resposeData.rombel).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.loading.dismiss();
                    // console.log(data);
                    if (data.data === undefined || data.data.length == 0) {
                        _this.loadToast("Tidak ada jadwal pelajaran saat ini!");
                    }
                    else {
                        _this.jadwal = data.data;
                        console.log(_this.jadwal);
                    }
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    JadwalpelajaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jadwalpelajaran',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jadwalpelajaran/jadwalpelajaran.html"*/'<!--\n  Generated template for the JadwalmengajarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Jadwal Pelajaran</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngFor="let data of jadwal" style="margin-bottom: 60px;padding-bottom: 20px;">\n    <ion-list-header class="hari">{{data.nama_hari}}</ion-list-header>\n    <ion-item class="wrapper-jadwal" *ngFor="let ann of data.detail">\n        <div class="jam">{{ann.jam_mulai}}-{{ann.jam_selesai}}</div>\n        <div class="wrapper-mapel">\n          <div class="mapel"><b>{{ann.nama_matpel}}</b></div>\n          <div class="guru">{{ann.nama}}</div>\n        </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jadwalpelajaran/jadwalpelajaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], JadwalpelajaranPage);
    return JadwalpelajaranPage;
}());

//# sourceMappingURL=jadwalpelajaran.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PembayaranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PembayaranPage = /** @class */ (function () {
    function PembayaranPage(navCtrl, navParams, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.spp = [];
        this.sppsudah = [];
        this.getRemoteData();
    }
    PembayaranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PembayaranPage');
    };
    PembayaranPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu Sebentar...',
        });
        this.loading.present();
    };
    PembayaranPage.prototype.getRemoteData = function () {
        var _this = this;
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                // this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/pembayaransiswa/' + resposeData.id).subscribe(function (data) {
                    // console.log(data);
                    _this.spp = data.data;
                    console.log(_this.spp);
                });
                _this.http.get('http://153.92.4.64/api/pembayaransiswasudah/' + resposeData.id).subscribe(function (data) {
                    // console.log(data);
                    _this.sppsudah = data.data;
                    console.log(_this.sppsudah);
                });
                _this.loading.dismiss();
            }
            else {
                console.log(resp);
            }
        });
    };
    PembayaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pembayaran',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pembayaran/pembayaran.html"*/'<!--\n  Generated template for the PembayaranPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>Pembayaran</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <div class="tab-wrap">\n        <input type="radio" name="tabs" id="tab1" checked>\n        <div class="tab-label-content" id="tab1-content">\n          <label class="tab-label" for="tab1"><ion-icon name="close-circle" class="top-label"></ion-icon> Belum</label>\n          <div class="tab-content left">\n            <ion-list class="box-bayar">\n                <ion-item *ngFor="let ann of spp">\n                  <div class="nominal">Rp {{ ann.nominal }}</div>\n                  <div class="deskripsi">{{ann.bulan}} {{ann.tahun}}</div>\n                </ion-item>\n              </ion-list>\n          </div>\n        </div>  \n        <input type="radio" name="tabs" id="tab2">\n        <div class="tab-label-content" id="tab2-content">\n          <label class="tab-label" for="tab2"><ion-icon name="checkmark-circle" class="top-label"></ion-icon> Sudah</label>\n          <div class="tab-content right">\n            <ion-list class="box-bayar">\n                <ion-item *ngFor="let ds of sppsudah">\n                  <div class="nominal">Rp {{ ds.nominal }}</div>\n                  <div class="deskripsi">{{ds.bulan}} {{ds.tahun}} - {{ ds.tgl_bayar }}</div>\n                </ion-item>\n              </ion-list>\n          </div>\n        </div>\n        <div class="slide"></div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pembayaran/pembayaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PembayaranPage);
    return PembayaranPage;
}());

//# sourceMappingURL=pembayaran.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabunganPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabunganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabunganPage = /** @class */ (function () {
    function TabunganPage(navCtrl, navParams, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.tabungan = [];
        this.getRemoteData();
    }
    TabunganPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu Sebentar...',
        });
        this.loading.present();
    };
    TabunganPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabunganPage');
    };
    TabunganPage.prototype.getRemoteData = function () {
        var _this = this;
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                // this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/tabungansiswa/' + resposeData.id).subscribe(function (data) {
                    console.log(data.data);
                    _this.tabungan = data.data;
                    console.log(_this.tabungan);
                });
                _this.loading.dismiss();
            }
            else {
                console.log(resp);
            }
        });
    };
    TabunganPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabungan',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/tabungan/tabungan.html"*/'<!--\n  Generated template for the TabunganPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tabungan</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <div class="judul-saldo">Saldo</div>\n      <div class="nominal-total">\n        <div class="simbol">Rp</div>\n        <div class="jumlah">{{ tabungan.jml_tabungan }}</div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header class="judul-transaksi">\n      <div class="left">Detail Transaksi</div>\n      <div class="right">Semua <ion-icon name="arrow-dropdown"></ion-icon></div>\n    </ion-list-header>\n    <ion-item *ngFor="let ann of tabungan.transaksi" class="box-transaksi">\n        <div class="wrapper">\n          <div class="ikon">\n            <ion-icon class="warna" *ngIf="ann.tgl_setor" name="arrow-dropup-circle"></ion-icon>\n            <ion-icon class="warna" *ngIf="ann.tgl_tarik" name="arrow-dropdown-circle"></ion-icon>\n          </div>\n          <div class="deskripsi">\n            <div class="tipe warna" *ngIf="ann.tgl_setor">Debit</div>\n            <div class="tipe warna" *ngIf="ann.tgl_tarik">Kredit</div> \n            \n            <div class="tanggal" *ngIf="ann.tgl_setor">{{ann.tgl_setor}}</div>\n            <div class="tanggal" *ngIf="ann.tgl_tarik">{{ann.tgl_tarik}}</div>\n          </div> \n          <div class="nominal">\n            <span class="in" *ngIf="ann.nominal_setor">+Rp {{ann.nominal_setor}}</span> \n            <span class="out" *ngIf="ann.nominal_tarik">-Rp {{ann.nominal_tarik}}</span> \n          </div>\n        </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/tabungan/tabungan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TabunganPage);
    return TabunganPage;
}());

//# sourceMappingURL=tabungan.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JadwalmengajarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JadwalmengajarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JadwalmengajarPage = /** @class */ (function () {
    // server: string ="http://153.92.4.64/api/";
    // headers: any = new Headers({ 'Content-Type': 'application/json' });
    // options: any = new RequestOptions({ headers: this.headers });
    function JadwalmengajarPage(navCtrl, navParams, storage, http, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // nama_mk: string;
        // hari: string;
        // jam: string;
        this.datamk = [];
        this.jadwal = [];
        this.Scrolling = true;
        this.limit = 3;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    JadwalmengajarPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    JadwalmengajarPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = 'none';
    // }
    // ionViewWillLeave() {
    //   this.tabBarElement.style.display = 'none';
    // }
    JadwalmengajarPage.prototype.getRemoteData = function () {
        var _this = this;
        this.page = 0;
        this.jadwal = [];
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.http.get('http://153.92.4.64/api/jadwal/' + resposeData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.loading.dismiss();
                    // console.log(data);
                    if (data.data === undefined || data.data.length == 0) {
                        _this.loadToast("Anda tidak mempunyai jadwal mengajar!");
                    }
                    else {
                        _this.jadwal = data.data;
                        console.log(_this.jadwal);
                    }
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    JadwalmengajarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jadwalmengajar',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jadwalmengajar/jadwalmengajar.html"*/'<!--\n  Generated template for the JadwalmengajarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>Jadwal Mengajar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <!-- <ion-list-header><ion-icon name="folder" item-start></ion-icon> Senin</ion-list-header> -->\n      <ion-item *ngFor="let ann of jadwal">\n        <ion-icon name="paper" item-start></ion-icon>\n          {{ann.nama_matpel}}\n          <p>{{ann.nama_hari}}</p>\n          <p><small>Jam {{ann.jam_mulai}} ~ {{ann.jam_selesai}}</small></p>\n      </ion-item>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" id="scrollContent">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jadwalmengajar/jadwalmengajar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], JadwalmengajarPage);
    return JadwalmengajarPage;
}());

//# sourceMappingURL=jadwalmengajar.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JurnalkbmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JurnalkbmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JurnalkbmPage = /** @class */ (function () {
    // server: string ="http://153.92.4.64/api/";
    // headers: any = new Headers({ 'Content-Type': 'application/json' });
    // options: any = new RequestOptions({ headers: this.headers });
    function JurnalkbmPage(navCtrl, navParams, storage, http, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // nama_mk: string;
        // hari: string;
        // jam: string;
        this.datamk = [];
        this.jadwal = [];
        this.Scrolling = true;
        this.limit = 3;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    JurnalkbmPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    JurnalkbmPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = 'none';
    // }
    // ionViewWillLeave() {
    //   this.tabBarElement.style.display = 'none';
    // }
    JurnalkbmPage.prototype.getRemoteData = function () {
        var _this = this;
        this.page = 0;
        this.jadwal = [];
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.http.get('http://153.92.4.64/api/jurnal/' + resposeData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.loading.dismiss();
                    // console.log(data);
                    if (data.data === undefined || data.data.length == 0) {
                        _this.loadToast("Anda tidak mempunyai jurnal untuk diisi!");
                    }
                    else {
                        _this.jadwal = data.data;
                        console.log(_this.jadwal);
                    }
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    JurnalkbmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jurnalkbm',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jurnalkbm/jurnalkbm.html"*/'<!--\n  Generated template for the JadwalmengajarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>Jurnal KBM</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <!-- <ion-list-header><ion-icon name="folder" item-start></ion-icon> Senin</ion-list-header> -->\n      <ion-item *ngFor="let ann of jadwal">\n        <ion-icon name="book" item-start></ion-icon>\n        {{ann.nama_matpel}}\n        <p>{{ann.nama_hari}}</p>\n        <p><small>Jam {{ann.jam_mulai}} ~ {{ann.jam_selesai}}</small></p>\n        <ion-icon name="add" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jurnalkbm/jurnalkbm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], JurnalkbmPage);
    return JurnalkbmPage;
}());

//# sourceMappingURL=jurnalkbm.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/faq/faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>F.A.Q.</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BeritaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeritaDetailPage = /** @class */ (function () {
    function BeritaDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ann = navParams.get('item');
        console.log(this.ann);
        this.selectEvent = navParams.get('event');
    }
    BeritaDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeritaDetailPage');
    };
    BeritaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-berita-detail',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/berita-detail/berita-detail.html"*/'<!--\n  Generated template for the PengumumanDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="darkblue">\n	  <ion-title>Detail Pengumuman</ion-title>\n	</ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n	  <div>\n		  <ion-item>\n		  <h2>\n			  <strong *ngIf="ann.kategori==\'pengumuman\'" id="colorNews">Pengumuman</strong>\n			  <strong *ngIf="ann.kategori==\'berita\'">Berita</strong>\n		  </h2>\n		</ion-item>\n		\n		<img *ngIf="ann.gambar" src="{{ann.gambar}}"/>\n		<ion-card-content>\n		<ion-card-title>\n			{{ann.judul}}\n				  </ion-card-title>\n		  <div>\n			  <p text-wrap style="text-align:justify;">\n		<span [innerHTML]= 	ann.detail> </span>\n		  </p>\n		  </div>\n		</ion-card-content>\n		<ion-row>\n		  <ion-col>\n			<button ion-button icon-left clear small>\n			  <div>Post by: {{ann.post_by}}</div>\n			</button>\n		  </ion-col>\n		  <ion-col center text-center>\n			<ion-note>\n			  {{ann.tanggal}}\n			</ion-note>\n		  </ion-col>\n		</ion-row>\n	  </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/berita-detail/berita-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BeritaDetailPage);
    return BeritaDetailPage;
}());

//# sourceMappingURL=berita-detail.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BursaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BursaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BursaDetailPage = /** @class */ (function () {
    function BursaDetailPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
        this.selectedEvent = navParams.get('event');
        // console.log(this.selectedEvent);
        var obj = this.selectedItem.deskripsi;
        var test = Object.keys(obj).map(function (key) { return obj[key]; });
        // console.log(test);
        setTimeout(function () {
            _this.deskripsi.nativeElement.innerHTML = obj;
        }, 500);
        this.selectedEvent = navParams.get('event');
    }
    BursaDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BursaDetailPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('deskripsi'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BursaDetailPage.prototype, "deskripsi", void 0);
    BursaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bursa-detail',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/bursa-detail/bursa-detail.html"*/'<!--\n  Generated template for the Ikaldetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="darkblue">\n    <ion-title>Detail {{selectedItem.kategori}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#DCDCDC;">\n<ion-card>\n  <ion-item>\n    <ion-avatar item-left>\n      <img src={{selectedItem.logo}}>\n    </ion-avatar>\n    <h2>{{selectedItem.judul}}</h2>\n    <p>{{selectedItem.created_at}}</p>\n    \n  </ion-item>\n  <ion-card-content>\n    <div #deskripsi>\n      <!-- {{selectedItem.deskripsi}} -->\n    </div>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/bursa-detail/bursa-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BursaDetailPage);
    return BursaDetailPage;
}());

//# sourceMappingURL=bursa-detail.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BursaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bursa_detail_bursa_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BursaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BursaPage = /** @class */ (function () {
    function BursaPage(navCtrl, navParams, ikalProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ikalProvider = ikalProvider;
        this.loadingCtrl = loadingCtrl;
        this.category = 'all';
        this.loadAllData();
    }
    BursaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BursaPage');
    };
    BursaPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    BursaPage.prototype.loadAllData = function () {
        var _this = this;
        this.loadLoading();
        this.ikalData = [];
        //start find data
        this.ikalProvider.getAll('showikal', this.category).subscribe(function (data) {
            _this.ikalData = data.data;
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
        });
    };
    BursaPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bursa_detail_bursa_detail__["a" /* BursaDetailPage */], {
            item: item,
            event: event
        });
    };
    BursaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bursa',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/bursa/bursa.html"*/'<!--\n  Generated template for the Ikal page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bursa Kerja</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-color:#DCDCDC;">\n\n<ion-item>\n  <ion-label>Kategori</ion-label>\n  <ion-select [(ngModel)]="category" (ionChange)="loadAllData()">\n    <ion-option value="all">All</ion-option>\n    <ion-option value="Lowongan">Lowongan</ion-option>\n    <ion-option value="Beasiswa">Beasiswa</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-list>\n  <ion-item *ngFor="let ann of ikalData" (tap)="itemTapped($event, ann)">\n    <ion-thumbnail item-left>\n      <img src={{ann.logo}}>\n    </ion-thumbnail>\n    <h3>{{ann.judul}}</h3>\n    <p>{{ann.created_at}}</p>\n    <span *ngIf="ann.kategori==\'Beasiswa\'" class="labelBlue">{{ann.kategori}}</span>\n    <span *ngIf="ann.kategori==\'Lowongan\'" class="labelGreen">{{ann.kategori}}</span>\n    <ion-icon name="md-arrow-dropright-circle" clear item-right></ion-icon>\n  </ion-item>  \n</ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/bursa/bursa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BursaPage);
    return BursaPage;
}());

//# sourceMappingURL=bursa.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ann = navParams.get('item');
        console.log(this.ann);
        this.selectEvent = navParams.get('event');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/detail/detail.html"*/'<!--\n  Generated template for the PengumumanDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="darkblue">\n	  <ion-title>Detail Berita</ion-title>\n	</ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n	  <div>\n		  <ion-item>\n		  <h2>\n			  <strong *ngIf="ann.kategori==\'pengumuman\'" id="colorNews">Pengumuman</strong>\n			  <strong *ngIf="ann.kategori==\'berita\'">Berita</strong>\n		  </h2>\n		</ion-item>\n		\n		<img *ngIf="ann.gambar" src="{{ann.gambar}}"/>\n		<ion-card-content>\n		  <ion-card-title>\n			{{ann.judul}}\n				  </ion-card-title>\n		  <div>\n			  <p text-wrap style="text-align:justify;">\n		<span [innerHTML]= 	ann.detail> </span>\n		  </p>\n		  </div>\n			  \n		</ion-card-content>\n		<ion-row>\n		  <ion-col>\n			<button ion-button icon-left clear small>\n			  <div>Post by: {{ann.post_by}}</div>\n			</button>\n		  </ion-col>\n		  <ion-col center text-center>\n			<ion-note>\n			  {{ann.tanggal}}\n			</ion-note>\n		  </ion-col>\n		</ion-row>\n	  </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EbookPage = /** @class */ (function () {
    function EbookPage(navCtrl, navParams, toastCtrl, loadingCtrl, bookService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bookService = bookService;
        this.limit = 100;
        this.categoryBuku = "ALL";
        this.searchQuery = "";
        this.loadAll();
        this.page = 0;
    }
    EbookPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    EbookPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    EbookPage.prototype.loadAll = function () {
        var _this = this;
        this.loadLoading();
        this.page = 0;
        this.books = [];
        //start find data
        this.bookService.getAll('downloadbuku', this.categoryBuku).subscribe(function (data) {
            _this.allData = data.data;
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            console.log(_this.allData);
            _this.loading.dismiss();
            _this.dataLength = _this.allData.length;
            console.log('Data Length: ' + _this.dataLength);
            _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
            _this.loadDataToShow(_this.limit, _this.page);
        });
    };
    EbookPage.prototype.loadDataToShow = function (lim, pag) {
        var start = pag * lim;
        var end = start + (lim - 1);
        // if you forget, start making simple simulation 
        // for page number and data to show
        console.log('Page: ' + this.page + 'MaxPage:' + this.maxPage);
        if (this.maxPage > pag) {
            if (pag == (this.maxPage - 1)) {
                //console.log(this.allData[0]);
                if (typeof this.allData[0].error !== 'undefined') {
                    this.loadToast(this.allData[0].error);
                }
                else {
                    console.log('masuk sini');
                    for (var i = start; i < this.dataLength; i++) {
                        this.books.push(this.allData[i]);
                    }
                }
            }
            else {
                for (var i = start; i <= end; i++) {
                    this.books.push(this.allData[i]);
                }
            }
        }
        console.log('Load data to show finish!');
    };
    EbookPage.prototype.sortByKelas = function () {
        if (this.searchQuery == "") {
            this.loadAll();
        }
        else {
            this.loadAllBySearch();
        }
    };
    EbookPage.prototype.loadAllBySearch = function () {
        var _this = this;
        this.page = 0;
        var allSearchData;
        this.loadLoading();
        console.log(this.categoryBuku);
        console.log(this.searchQuery);
        var link;
        if (this.searchQuery == "") {
            link = 'downloadbuku/';
        }
        else {
            link = 'downloadbuku/' + this.searchQuery;
        }
        this.bookService.getAll(link, this.categoryBuku).subscribe(function (data) {
            allSearchData = data.data;
            console.log(allSearchData[0]);
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
            if (typeof allSearchData[0].error !== 'undefined') {
                console.log(allSearchData[0].error);
                _this.loadToast(allSearchData[0].error);
            }
            else {
                _this.allData = allSearchData;
                _this.dataLength = _this.allData.length;
                console.log('Data length:' + _this.dataLength);
                _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
                _this.books = [];
                _this.loadDataToShow(_this.limit, _this.page);
            }
        });
    };
    EbookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EbookPage');
    };
    EbookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ebook',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/ebook/ebook.html"*/'<!--\n  Generated template for the Downloadbook page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Download Book</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-searchbar>\n    [(ngModel)]="searchQuery" \n    (search)="loadAllBySearch()" \n    (ionClear)="loadAll()"  \n    [showCancelButton]="false" >\n</ion-searchbar>\n\n  <ion-item>\n    <ion-label>Kategori</ion-label>\n    <ion-select [(ngModel)]="categoryBuku" (ionChange)="sortByKelas($event)">\n      <ion-option value="ALL">All</ion-option>\n      <ion-option value="X">Kelas X</ion-option>\n      <ion-option value="XI">Kelas XI</ion-option>\n      <ion-option value="XII">Kelas XII</ion-option>\n    </ion-select>\n  </ion-item>\n<ion-list>\n  <ion-item *ngFor="let buku of books">\n    <ion-thumbnail  item-left>\n      <img src={{buku.logo}} >\n      <!-- <img  *ngIf!="buku.logo" src="img/nopreview.jpg"> -->\n    </ion-thumbnail>\n    <h2>{{buku.judul}}</h2>\n    <p>{{buku.pengarang}} • {{buku.tahunterbit}}</p>\n    <a class="button" ion-button  href="{{buku.file}}">Download</a>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/ebook/ebook.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], EbookPage);
    return EbookPage;
}());

//# sourceMappingURL=ebook.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the KontakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KontakPage = /** @class */ (function () {
    function KontakPage(navCtrl, navParams, infoProvicer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.infoProvicer = infoProvicer;
        this.loadingCtrl = loadingCtrl;
        this.selectedItem = navParams.get('item');
        this.selectedEvent = navParams.get('event');
        this.loadContact();
    }
    KontakPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    KontakPage.prototype.loadContact = function () {
        var _this = this;
        this.infoProvicer.getAll('info', 'kontak').subscribe(function (data) {
            _this.kontak = data.data;
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
        });
    };
    KontakPage.prototype.openLink = function (event, item) {
        if (item.name == "Website") {
            //  this.iab.create(item.value, '_system');    
            window.open(item.value, '_system');
            console.log('Website');
        }
        else if (item.name == "Telepon") {
            // window.open(item.value,'_system');
            window.open('tel:${' + item.value + '}', '_system');
            console.log('Telepon');
        }
        else if (item.name == "Facebook") {
            window.open(item.value, '_system');
            console.log('Facebook');
        }
        else if (item.name == "Instagram") {
            window.open(item.value, '_system');
            console.log('Instagram');
        }
        else if (item.name == "Youtube") {
            window.open(item.value, '_system');
            console.log('Youtube');
        }
        else if (item.name == "Alamat") {
            window.open("https://goo.gl/maps/PPzdzsKXBem", '_system');
            console.log('Alamat');
        }
        if (item.name == "Email") {
            window.open('mailto:${' + item.value + '}', '_system');
            console.log('Email');
        }
    };
    KontakPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KontakPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('profile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KontakPage.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('visimisi'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KontakPage.prototype, "visimisi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sejarah'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KontakPage.prototype, "sejarah", void 0);
    KontakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kontak',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/kontak/kontak.html"*/'<!--\n  Generated template for the Infodetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="darkblue">\n    <ion-title>Kontak</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding >\n\n  <div>\n    <ion-list *ngFor="let ann of kontak">\n        <ion-item (click)="openLink($event, ann)">\n          <ion-avatar item-left>\n              <ion-icon name="{{ann.gambar}}"></ion-icon>\n        </ion-avatar>\n        <h2>{{ann.name}}</h2>\n          <p>{{ann.value}}</p>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  \n</ion-content>\n\n\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/kontak/kontak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], KontakPage);
    return KontakPage;
}());

//# sourceMappingURL=kontak.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, toastCtrl, loadingCtrl, newsService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.newsService = newsService;
        this.formBuilder = formBuilder;
        this.category = "all";
        this.Scrolling = true;
        this.limit = 3;
        this.news = [];
        this.allData = [];
        this.allBySearch = [];
        this.searchQuery = "";
        this.page = 0;
        this.loadAllData();
    }
    ListPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    ListPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    ListPage.prototype.loadAllData = function () {
        var _this = this;
        this.loadLoading();
        this.page = 0;
        this.news = [];
        //start find data
        this.newsService.getAll('news', 'berita').subscribe(function (data) {
            _this.allData = data.data;
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
            _this.dataLength = _this.allData.length;
            console.log('Data Length: ' + _this.dataLength);
            _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
            _this.loadDataToShow(_this.limit, _this.page);
        });
    };
    //page start from 0;
    //see constructur for initialization
    ListPage.prototype.loadDataToShow = function (lim, pag) {
        console.log("Data category saat ini: " + this.category);
        //start find data
        var start = pag * lim;
        var end = start + (lim - 1);
        // if you forget, start making simple simulation 
        // for page number and data to show
        console.log('Page: ' + this.page + 'MaxPage:' + this.maxPage);
        if (this.maxPage > pag) {
            if (pag == (this.maxPage - 1)) {
                //console.log(this.allData[0]);
                if (typeof this.allData[0].error !== 'undefined') {
                    this.loadToast(this.allData[0].error);
                }
                else {
                    console.log('masuk sini');
                    for (var i = start; i < this.dataLength; i++) {
                        this.news.push(this.allData[i]);
                    }
                }
            }
            else {
                for (var i = start; i <= end; i++) {
                    this.news.push(this.allData[i]);
                }
            }
        }
        console.log('maxPage: ' + this.maxPage + ' page: ' + pag + '');
        console.log(this.news);
        console.log('Load data to show finish!');
    };
    //load Search Event
    ListPage.prototype.loadAllBySearch = function () {
        var _this = this;
        //start find data
        //console.log(this.searchQuery);
        this.page = 0;
        var allSearchData;
        this.loadLoading();
        this.newsService.getAll('news', 'berita').subscribe(function (data) {
            allSearchData = data.data;
            console.log(allSearchData[0]);
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
            if (typeof allSearchData[0].error !== 'undefined') {
                console.log(allSearchData[0].error);
                _this.loadToast(allSearchData[0].error);
            }
            else {
                _this.allData = allSearchData;
                _this.dataLength = _this.allData.length;
                console.log('Data length:' + _this.dataLength);
                _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
                _this.news = [];
                _this.loadDataToShow(_this.limit, _this.page);
            }
        });
    };
    ListPage.prototype.sortByCategory = function (event) {
        console.log("Data search:", this.searchQuery);
        if (this.searchQuery == "") {
            this.loadAllData();
        }
        else {
            this.loadAllBySearch();
        }
    };
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengumumanPage');
    };
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            item: item,
            event: event
        });
    };
    ListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.page < this.maxPage) {
            this.page++;
            console.log('Begin async operation');
            setTimeout(function () {
                _this.loadDataToShow(_this.limit, _this.page);
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
        console.log(this.page);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/list/list.html"*/'<!--\n  Generated template for the Pengumuman page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Berita</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="card-background-page" style="background-color:#DCDCDC;">\n	<!-- <ion-searchbar [(ngModel)]="searchQuery" (input)="searchBerita($event)"></ion-searchbar> -->\n	<ion-searchbar \n		[(ngModel)]="searchQuery" \n		(search)="loadAllBySearch($event)" \n		(ionClear)="loadAllData()"  \n		[showCancelButton]="false" >\n			\n	</ion-searchbar>\n	<!-- <ion-item style="background-color:#DCDCDC;">\n      <ion-label style="color:black">Kategori</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="sortByCategory($event)">\n        <ion-option value="all">All</ion-option> \n        <ion-option value="berita">Berita</ion-option>\n         <ion-option value="pengumuman">Pengumuman</ion-option>\n      </ion-select>\n		</ion-item> -->\n		\n		<ion-card (tap)="itemTapped($event, ann)" *ngFor="let ann of news">\n			<img *ngIf="ann.gambar" src="{{ann.gambar}}"/>\n			<div class="card-title">{{ann.judul}}</div>\n			<!-- <div class="card-subtitle">Post by: {{ann.post_by}}</div> -->\n		</ion-card>\n\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)" id="scrollContent">\n	   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/list/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FasilitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FasilitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FasilitasPage = /** @class */ (function () {
    function FasilitasPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    FasilitasPage.prototype.getData = function () {
        var _this = this;
        var url = "http://153.92.4.64/api/fasilitas";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.item = result.data;
            // console.log(this.item.deskripsi);
        });
    };
    FasilitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fasilitas',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/fasilitas/fasilitas.html"*/'<!--\n  Generated template for the FasilitasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fasilitas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <!-- <ion-list-header><ion-icon name="folder" item-start></ion-icon> Senin</ion-list-header> -->\n        <ion-item *ngFor="let ann of item">\n          {{ann.nama_fasilitas}}\n          <p><small>Luas: {{ann.luas}}m<sup>2</sup></small></p>\n          <p><small>Kondisi: {{ann.keadaan}}</small></p>\n          <p><span [innerHTML]=ann.keterangan></span></p>\n        </ion-item>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/fasilitas/fasilitas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FasilitasPage);
    return FasilitasPage;
}());

//# sourceMappingURL=fasilitas.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PmbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PmbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PmbPage = /** @class */ (function () {
    function PmbPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PmbPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PmbPage');
    };
    PmbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pmb',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pmb/pmb.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>PPDB</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>               \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Nama\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Nama"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n      \n                  <ion-list>\n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Tempat Lahir\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Tempat Lahir"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Tanggal Lahir\n                            </ion-label>\n                            <ion-input\n                              type="date"\n                              placeholder="Masukkan Tanggal Lahir"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Jenis Kelamin\n                            </ion-label>\n                            <ion-select>\n                                <ion-option value="Laki-Laki">\n                                  Laki-laki\n                                </ion-option>\n                                <ion-option value="Perempuan">\n                                  Perempuan\n                                </ion-option>\n                              </ion-select>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Agama\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Agama"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Warga Negara\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Warga Negara"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Alamat\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Alamat"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              No. Telp.\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan No Telepon"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Email\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Email"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              NISN\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan NISN"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Asal SMP\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Asal SMA/SMK"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Tahun Tamat\n                            </ion-label>\n                            <ion-input\n                              type="text"\n                              placeholder="Masukkan Tahun Tamat"></ion-input>\n                          </ion-item>\n                     </ion-item-group>\n  \n                     <ion-item-group>\n                        <ion-item >\n                            <ion-label>\n                              Jurusan\n                            </ion-label>\n                            <ion-select>\n                                <ion-option value=" IV Hotel Management">\n                                  IV Hotel Management\n                                </ion-option>\n                                <ion-option value=" IV Tourism Management">\n                                  IV Tourism Management\n                                </ion-option>\n                                <ion-option value="III Food Production Management">\n                                  III Food Production Management\n                                </ion-option>\n                                <ion-option value="III Hotel Management">\n                                    III Hotel Management\n                                </ion-option>\n                              </ion-select>\n                          </ion-item>\n                     </ion-item-group>\n                     \n      \n                     <ion-item>\n                        <button\n                           ion-button\n                           color="secondary"\n                           text-center\n                           block style="border-radius:5px;">Daftar</button>\n                     </ion-item>\n      \n                  </ion-list>\n      \n  </ion-content>\n  '/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pmb/pmb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PmbPage);
    return PmbPage;
}());

//# sourceMappingURL=pmb.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visimis_visimis__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jurusan_jurusan__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sejarah_sejarah__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fasilitas_fasilitas__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    ProfilPage.prototype.jurusan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jurusan_jurusan__["a" /* JurusanPage */]);
    };
    ProfilPage.prototype.visimisi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visimis_visimis__["a" /* VisimisPage */]);
    };
    ProfilPage.prototype.sejarah = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sejarah_sejarah__["a" /* SejarahPage */]);
    };
    ProfilPage.prototype.fasilitas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__fasilitas_fasilitas__["a" /* FasilitasPage */]);
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profil/profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: right;">\n      <div class="inline-logo">\n        <img src="assets/imgs/icons/melah.png" style="height:37px">\n      </div>\n      <div class="inline-logo">\n        <span>MELAH</span>\n        <p class="tag">Mobile Elektronik Sekolah</p>\n        <p class="prabhu">Created by Jenget Prabhu</p>\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n\n  <div class="grid atas">\n      <div class="row responsive-sm">\n        <div class="col">\n          <div class="card kop-sekolah">\n            <img class="logo-smk" src="assets/imgs/icons/icon.png">\n            <div class="text">SMK Prshanti Nilayam Kuta<hr><span>MOBILE</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <ion-grid>\n    <ion-list>\n      <ion-item (click)="profile()">\n        <ion-avatar item-left>\n          <!-- <img src="assets/imgs/icons/profile.png"> -->\n          <ion-icon name="create"></ion-icon>\n        </ion-avatar>\n        <h2>Profil</h2>\n      </ion-item>\n      <ion-item (click)="sejarah()">\n        <ion-avatar item-left>\n          <!-- <img src="assets/imgs/icons/sejarah.png"> -->\n          <ion-icon name="list-box"></ion-icon>\n        </ion-avatar>\n        <h2>Sejarah</h2>\n      </ion-item>\n      <ion-item (click)="visimisi()">\n        <ion-avatar item-left>\n          <!-- <img src="assets/imgs/icons/visimisi.png"> -->\n          <ion-icon name="ribbon"></ion-icon>\n        </ion-avatar>\n        <h2>Visi & Misi</h2>\n      </ion-item>\n      <ion-item (click)="jurusan()">\n        <ion-avatar item-left>\n          <!-- <img src="assets/imgs/icons/jurusan.png"> -->\n          <ion-icon name="school"></ion-icon>\n        </ion-avatar>\n        <h2>Jurusan</h2>\n      </ion-item>\n      <ion-item (click)="fasilitas()">\n        <ion-avatar item-left>\n          <!-- <img src="assets/imgs/icons/fasilitas.png"> -->\n          <ion-icon name="trophy"></ion-icon>\n        </ion-avatar>\n        <h2>Fasilitas</h2>\n      </ion-item>\n    </ion-list>\n<!-- \n    <ion-row class="baris">\n      <ion-col col-4 (click)="profile()">\n        <div class="kotak">\n            <img src="assets/imgs/icons/profile.png">\n          <p>Profil</p>\n        </div>\n      </ion-col>\n      <ion-col col-4 (click)="sejarah()">\n        <div class="kotak">\n          <img src="assets/imgs/icons/sejarah.png">\n          <p>Sejarah</p>\n        </div>\n      </ion-col>\n      <ion-col col-4 (click)="visimisi()">\n        <div class="kotak">\n          <img src="assets/imgs/icons/visimisi.png">\n          <p>Visi & Misi</p>\n        </div>\n      </ion-col>\n      <ion-col col-6 (click)="guru()">\n          <div class="kotak">\n            <ion-icon name="basket"></ion-icon>\n            <p>Guru</p>\n          </div>\n        </ion-col> \n      <ion-col col-6 (click)="jurusan()">\n        <div class="kotak">\n            <img src="assets/imgs/icons/jurusan.png">\n          <p>Jurusan</p>\n        </div>\n      </ion-col>\n      <ion-col col-6 (click)="fasilitas()">\n        <div class="kotak">\n            <img src="assets/imgs/icons/fasilitas.png">\n          <p>Fasilitas</p>\n        </div>\n      </ion-col>\n       <ion-col col-6 (click)="datalain()">\n        <div class="kotak">\n          <ion-icon name="card"></ion-icon>\n          <p>Data Lain</p>\n        </div>\n      </ion-col> \n    </ion-row> -->\n\n    <p class="footer">*Informasi dan profil sekolah dapat dilihat dengan cara mengklik submenu.</p>\n    \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profil/profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.getData();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getData = function () {
        var _this = this;
        this.loadLoading();
        var url = "http://153.92.4.64/api/info";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.item = result.data[0]['deskripsi'];
            _this.judul = result.data[0]['judul'];
            // console.log(this.item.deskripsi);
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu...',
        });
        this.loading.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profil Sekolah</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="konten">\n  <span [innerHTML]=item></span>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisimisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VisimisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisimisPage = /** @class */ (function () {
    function VisimisPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    VisimisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    VisimisPage.prototype.getData = function () {
        var _this = this;
        var url = "http://153.92.4.64/api/info";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.item = result.data[1]['deskripsi'];
            _this.judul = result.data[1]['judul'];
            // console.log(this.item.deskripsi);
        });
    };
    VisimisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visimis',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/visimis/visimis.html"*/'<!--\n  Generated template for the VisimisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Visi & Misi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="konten">\n  <span [innerHTML]=item></span>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/visimis/visimis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], VisimisPage);
    return VisimisPage;
}());

//# sourceMappingURL=visimis.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JurusanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the JurusanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JurusanPage = /** @class */ (function () {
    function JurusanPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    JurusanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JurusanPage');
    };
    JurusanPage.prototype.getData = function () {
        var _this = this;
        var url = "http://153.92.4.64/api/jurusan";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.item = result.data;
            // console.log(this.item.deskripsi);
        });
    };
    JurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jurusan',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jurusan/jurusan.html"*/'<!--\n  Generated template for the JurusanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Jurusan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list>\n          <!-- <ion-list-header><ion-icon name="folder" item-start></ion-icon> Senin</ion-list-header> -->\n          <ion-item *ngFor="let ann of item">\n            <ion-thumbnail item-start>\n              <img src="http://melah.smkprshantinilayamkuta.sch.id/img/banner/jurusan/{{ann.logo}}">\n            </ion-thumbnail>\n            {{ann.nama_jurusan}}\n            <p>{{ann.singkatan_jurusan}}</p>\n            <p><small>Ijin: {{ann.ijin_jurusan}}</small></p>\n            <p><span [innerHTML]=ann.penjelasan></span></p>\n          </ion-item>\n        </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/jurusan/jurusan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], JurusanPage);
    return JurusanPage;
}());

//# sourceMappingURL=jurusan.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SejarahPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the SejarahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SejarahPage = /** @class */ (function () {
    function SejarahPage(navParams, http) {
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    SejarahPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    SejarahPage.prototype.getData = function () {
        var _this = this;
        // this.p.loadLoading();
        var url = "http://153.92.4.64/api/info";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.item = result.data[2]['deskripsi'];
            _this.judul = result.data[2]['judul'];
            // console.log(this.item.deskripsi);
            // this.p.loading.dismiss();
        });
    };
    SejarahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sejarah',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/sejarah/sejarah.html"*/'<!--\n  Generated template for the SejarahPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Sejarah</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div class="konten">\n  <span [innerHTML]=item></span>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/sejarah/sejarah.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SejarahPage);
    return SejarahPage;
}());

//# sourceMappingURL=sejarah.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/absensi/absensi.module": [
		711,
		31
	],
	"../pages/absensiguru/absensiguru.module": [
		712,
		30
	],
	"../pages/akunkepsek/akunkepsek.module": [
		713,
		29
	],
	"../pages/akunsiswa/akunsiswa.module": [
		715,
		28
	],
	"../pages/aplikasi/aplikasi.module": [
		714,
		27
	],
	"../pages/berita-detail/berita-detail.module": [
		716,
		26
	],
	"../pages/bursa-detail/bursa-detail.module": [
		717,
		25
	],
	"../pages/bursa/bursa.module": [
		718,
		24
	],
	"../pages/detail/detail.module": [
		719,
		23
	],
	"../pages/detailakun/detailakun.module": [
		720,
		22
	],
	"../pages/ebook/ebook.module": [
		721,
		21
	],
	"../pages/faq/faq.module": [
		722,
		20
	],
	"../pages/fasilitas/fasilitas.module": [
		734,
		19
	],
	"../pages/halkosong/halkosong.module": [
		723,
		18
	],
	"../pages/halsiswa/halsiswa.module": [
		724,
		1
	],
	"../pages/jadwalmengajar/jadwalmengajar.module": [
		725,
		17
	],
	"../pages/jadwalpelajaran/jadwalpelajaran.module": [
		726,
		16
	],
	"../pages/jurnalkbm/jurnalkbm.module": [
		727,
		15
	],
	"../pages/jurusan/jurusan.module": [
		741,
		14
	],
	"../pages/kontak/kontak.module": [
		728,
		13
	],
	"../pages/list/list.module": [
		729,
		12
	],
	"../pages/login/login.module": [
		730,
		11
	],
	"../pages/notifikasi/notifikasi.module": [
		732,
		10
	],
	"../pages/pembayaran/pembayaran.module": [
		731,
		9
	],
	"../pages/pengaturan/pengaturan.module": [
		733,
		8
	],
	"../pages/pmb/pmb.module": [
		735,
		7
	],
	"../pages/profil/profil.module": [
		736,
		6
	],
	"../pages/profile/profile.module": [
		737,
		5
	],
	"../pages/profiledetail/profiledetail.module": [
		738,
		0
	],
	"../pages/sejarah/sejarah.module": [
		742,
		4
	],
	"../pages/tabungan/tabungan.module": [
		739,
		3
	],
	"../pages/visimis/visimis.module": [
		740,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailakun_detailakun__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jadwalmengajar_jadwalmengajar__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jurnalkbm_jurnalkbm__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pengaturan_pengaturan__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__absensiguru_absensiguru__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContactPage = /** @class */ (function () {
    // role:string;
    // deviceObj: any=[];
    function ContactPage(navCtrl, storage, http, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.datadosen = [];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    ContactPage.prototype.openModal = function (chn) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__detailakun_detailakun__["a" /* DetailakunPage */], chn);
        modal.present();
    };
    ContactPage.prototype.getRemoteData = function () {
        var _this = this;
        this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/showgurupegawaidetail/' + resposeData.id).subscribe(function (data) {
                    // console.log(data);
                    _this.datadosen = data.data;
                    console.log(_this.datadosen);
                    _this.loading.dismiss();
                });
            }
            else {
                console.log(resp);
                _this.loading.dismiss();
            }
        });
    };
    ContactPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu...',
        });
        this.loading.present();
    };
    // ionViewWillEnter() {
    //   this.tabBarElement.style.display = 'none';
    // }
    // ionViewWillLeave() {
    //   this.tabBarElement.style.display = 'flex';
    // }
    ContactPage.prototype.jadwalMengajar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jadwalmengajar_jadwalmengajar__["a" /* JadwalmengajarPage */]);
    };
    ContactPage.prototype.jurnalKbm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jurnalkbm_jurnalkbm__["a" /* JurnalkbmPage */]);
    };
    ContactPage.prototype.pengaturan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pengaturan_pengaturan__["a" /* PengaturanPage */]);
    };
    ContactPage.prototype.absensi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__absensiguru_absensiguru__["a" /* AbsensiguruPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar hideBackButton>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="pengaturan()">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="bg-style">\n  <div class="bg-merah"></div>\n  <ion-item class="padding-top dashboard">\n    <ion-thumbnail style="min-height: unset;">\n      <img class="foto-profil" *ngIf="datadosen.foto" src="http://153.92.4.64/img/foto/gurupegawai/{{ datadosen.foto }}">\n      <img class="foto-profil" *ngIf="!datadosen.foto" src="http://153.92.4.64/img/avatar.png">\n    </ion-thumbnail>\n    <h3>{{ name_user }}</h3>\n    <p>{{ datadosen.nip }}</p>\n    <br>\n    <div class="tombol" (click)="openModal({charNum: 0})">\n      <ion-icon name="eye"></ion-icon> \n      Detail Akun\n    </div>\n  </ion-item>\n\n  <div class="grid">\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card" (click)="jadwalMengajar()">\n					<!-- <img src="assets/imgs/icons/berita.png"> -->\n					<ion-icon name="albums"></ion-icon>\n					<div class="text">Jadwal Mengajar</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card" (click)="absensi()">\n					<!-- <img src="assets/imgs/icons/Ebook.png"> -->\n					<ion-icon name="clipboard"></ion-icon>\n					<div class="text">Absensi</div>\n				</div>\n			</div>\n		</div>\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card"(click)="jurnalKbm()">\n					<!-- <img src="assets/imgs/icons/bursakerja.png"> -->\n					<ion-icon name="book"></ion-icon>\n					<div class="text">Jurnal KBM</div>\n				</div>\n			</div>\n			<!-- <div class="col">\n				<div class="card" (click)="tabungan()">\n					<img src="assets/imgs/icons/kontak.png">\n					<div class="text">Tabungan</div>\n				</div>\n			</div> -->\n		</div>\n	</div>\n\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/tabs/tabs.html"*/'<ion-tabs position="bottom">\n  <ion-tab mode="md" [root]="tab1Root" tabTitle="Beranda" tabIcon="home"></ion-tab>\n  <!-- <ion-tab mode="md" [root]="tab2Root" tabTitle="Pengumuman" tabBadge="3" tabBadgeStyle="danger" tabIcon="information-circle"></ion-tab> -->\n  <ion-tab mode="md" [root]="tab2Root" tabTitle="Pengumuman" tabIcon="list-box"></ion-tab>\n  <ion-tab mode="md" [root]="tab3Root" tabTitle="Akun" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__berita_detail_berita_detail__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifikasi_notifikasi__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, formBuilder, newsService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.newsService = newsService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.category = "all";
        this.Scrolling = true;
        this.limit = 10;
        this.news = [];
        this.allData = [];
        this.allBySearch = [];
        this.searchQuery = "";
        this.page = 0;
        this.loadAllData();
    }
    AboutPage.prototype.notifikasi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notifikasi_notifikasi__["a" /* NotifikasiPage */]);
    };
    AboutPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    AboutPage.prototype.loadToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    AboutPage.prototype.loadAllData = function () {
        var _this = this;
        this.loadLoading();
        this.page = 0;
        this.news = [];
        //start find data
        this.newsService.getAll('news', 'pengumuman').subscribe(function (data) {
            _this.allData = data.data;
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
            _this.dataLength = _this.allData.length;
            console.log('Data Length: ' + _this.dataLength);
            _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
            _this.loadDataToShow(_this.limit, _this.page);
        });
    };
    //page start from 0;
    //see constructur for initialization
    AboutPage.prototype.loadDataToShow = function (lim, pag) {
        console.log("Data category saat ini: " + this.category);
        //start find data
        var start = pag * lim;
        var end = start + (lim - 1);
        // if you forget, start making simple simulation 
        // for page number and data to show
        console.log('Page: ' + this.page + 'MaxPage:' + this.maxPage);
        if (this.maxPage > pag) {
            if (pag == (this.maxPage - 1)) {
                //console.log(this.allData[0]);
                if (typeof this.allData[0].error !== 'undefined') {
                    this.loadToast(this.allData[0].error);
                }
                else {
                    console.log('masuk sini');
                    for (var i = start; i < this.dataLength; i++) {
                        this.news.push(this.allData[i]);
                    }
                }
            }
            else {
                for (var i = start; i <= end; i++) {
                    this.news.push(this.allData[i]);
                }
            }
        }
        console.log('maxPage: ' + this.maxPage + ' page: ' + pag + '');
        console.log(this.news);
        console.log('Load data to show finish!');
    };
    //load Search Event
    AboutPage.prototype.loadAllBySearch = function () {
        var _this = this;
        //start find data
        //console.log(this.searchQuery);
        this.page = 0;
        var allSearchData;
        this.loadLoading();
        this.newsService.getAll('news', 'pengumuman').subscribe(function (data) {
            allSearchData = data.data;
            console.log(allSearchData[0]);
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }, function () {
            _this.loading.dismiss();
            if (typeof allSearchData[0].error !== 'undefined') {
                console.log(allSearchData[0].error);
                _this.loadToast(allSearchData[0].error);
            }
            else {
                _this.allData = allSearchData;
                _this.dataLength = _this.allData.length;
                console.log('Data length:' + _this.dataLength);
                _this.maxPage = Math.ceil(_this.dataLength / _this.limit);
                _this.news = [];
                _this.loadDataToShow(_this.limit, _this.page);
            }
        });
    };
    AboutPage.prototype.sortByCategory = function (event) {
        console.log("Data search:", this.searchQuery);
        if (this.searchQuery == "") {
            this.loadAllData();
        }
        else {
            this.loadAllBySearch();
        }
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuratPage');
    };
    AboutPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__berita_detail_berita_detail__["a" /* BeritaDetailPage */], {
            item: item,
            event: event
        });
    };
    AboutPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.page < this.maxPage) {
            this.page++;
            console.log('Begin async operation');
            setTimeout(function () {
                _this.loadDataToShow(_this.limit, _this.page);
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
        console.log(this.page);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/about/about.html"*/'<!--\n  Generated template for the Pengumuman page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n		<ion-buttons start>\n			<button id="all-notif-btn" ion-button icon-only (click)="notifikasi()">\n				<ion-icon name="notifications"></ion-icon>\n				<!-- <ion-badge id="all-notif-badge">5</ion-badge> -->\n			</button>\n		</ion-buttons>\n    <ion-title>\n			<div class="inline-logo">\n				<img src="assets/imgs/icons/melah.png" style="height:30px">\n			</div>\n			<div class="inline-logo">\n				<span>MELAH</span>\n				<p class="tag">Mobile Elektronik Sekolah</p>\n				<p class="prabhu">Created by Jenget Prabhu</p>\n			</div>\n		</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n	<!-- <ion-searchbar [(ngModel)]="searchQuery" (input)="searchBerita($event)"></ion-searchbar> -->\n	<ion-searchbar \n		[(ngModel)]="searchQuery" \n		(search)="loadAllBySearch($event)" \n		(ionClear)="loadAllData()"  \n		[showCancelButton]="false" >\n	</ion-searchbar>\n	<!-- <ion-item>\n      <ion-label style="color:black">Kategori</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="sortByCategory($event)">\n       \n        <ion-option value="pengumuman">Surat</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n	<ion-card (tap)="itemTapped($event, ann)" *ngFor="let ann of news">\n		<ion-item>\n			<ion-thumbnail item-start>\n					<img *ngIf="ann.gambar" src="{{ann.gambar}}"/>\n					<img *ngIf="!ann.gambar" src="assets/imgs/icons/icon.png"/>\n			</ion-thumbnail>\n			<h2>{{ann.judul}}</h2>\n			<p><small>{{ann.tanggal}}</small></p>\n			<!-- <button ion-button clear item-end>Lihat</button> -->\n		</ion-item>\n	</ion-card>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)" id="scrollContent">\n	   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pmb_pmb__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kontak_kontak__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bursa_bursa__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ebook_ebook__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifikasi_notifikasi__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getData();
    }
    HomePage.prototype.getData = function () {
        var _this = this;
        var url = "http://153.92.4.64/api/slider";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.items = result.data;
            // console.log(result.data);
        });
    };
    HomePage.prototype.notifikasi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__notifikasi_notifikasi__["a" /* NotifikasiPage */]);
    };
    HomePage.prototype.list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    HomePage.prototype.Profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilPage */]);
    };
    HomePage.prototype.PMB = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pmb_pmb__["a" /* PmbPage */]);
    };
    HomePage.prototype.kontak = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__kontak_kontak__["a" /* KontakPage */]);
    };
    HomePage.prototype.Bursa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bursa_bursa__["a" /* BursaPage */]);
    };
    HomePage.prototype.EBook = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ebook_ebook__["a" /* EbookPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/home/home.html"*/'<ion-header>\n	<ion-toolbar>\n	  <ion-buttons start>\n		<button id="all-notif-btn" ion-button icon-only (click)="notifikasi()">\n			<ion-icon name="notifications"></ion-icon>\n			<ion-badge id="all-notif-badge">*</ion-badge>\n	  	</button>\n	  </ion-buttons>\n	  <ion-title>\n		<div class="inline-logo">\n			<img src="assets/imgs/icons/melah.png" style="height:37px">\n		</div>\n		<div class="inline-logo">\n			<span>MELAH</span>\n			<p class="tag">Mobile Elektronik Sekolah</p>\n			<p class="prabhu">Created by Jenget Prabhu</p>\n		</div>\n	</ion-title>\n	  <!-- <ion-buttons end>\n		<button ion-button icon-only color="royal">\n		  <ion-icon name="more"></ion-icon>\n		</button>\n	  </ion-buttons> -->\n	</ion-toolbar>\n  </ion-header>\n\n<ion-content  class="bg-style">\n	<div class="bg-merah"></div>\n	<div class="grid atas">\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card kop-sekolah">\n					<img class="logo-smk" src="assets/imgs/icons/icon.png">\n					<div class="text">SMK Prshanti Nilayam Kuta<hr><span>MOBILE</span></div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<ion-slides *ngIf="items && items.length" autoplay="5000" loop="true" speed="500" pager="true">\n		<ion-slide *ngFor="let item of items">\n			<div class="slider">\n				<img src="{{item.gambar}}">\n			</div>\n		</ion-slide>\n	</ion-slides>\n	\n	<div class="grid">\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="text menu-utama"><ion-icon name="apps"></ion-icon> Menu Utama</div>\n			</div>\n		</div>\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card profil" (click)="Profile()">\n					<img src="assets/imgs/icons/profil.png">\n					<div class="text">Profil</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card berita" (click)="list()">\n					<img src="assets/imgs/icons/berita.png">\n					<div class="text">Berita</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card ebook" (click)="EBook()">\n					<img src="assets/imgs/icons/ebook.png">\n					<div class="text">E-Book</div>\n				</div>\n			</div>\n		</div>\n		<div class="row responsive-sm">\n			<div class="col">\n				<div class="card bursa"(click)="Bursa()">\n					<img src="assets/imgs/icons/bursa.png">\n					<div class="text">Bursa</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card ppdb" (click)="PMB()">\n					<img src="assets/imgs/icons/ppdb.png">\n					<div class="text">PPDB</div>\n				</div>\n			</div>\n			<div class="col">\n				<div class="card kontak" (click)="kontak()">\n					<img src="assets/imgs/icons/kontak.png">\n					<div class="text">Kontak</div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<!-- <div class="aqi-status good">\n	<div class="aqi-readable">GOOD</div>\n	<div class="chart-container">\n	<canvas #barCanvas class="aqi-graph" style="height:250px">\n	</canvas>\n	</div>\n	</div> -->\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AkunkepsekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AkunkepsekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AkunkepsekPage = /** @class */ (function () {
    function AkunkepsekPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AkunkepsekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AkunkepsekPage');
    };
    AkunkepsekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-akunkepsek',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/akunkepsek/akunkepsek.html"*/'<!--\n  Generated template for the AkunkepsekPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>akunkepsek</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/akunkepsek/akunkepsek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AkunkepsekPage);
    return AkunkepsekPage;
}());

//# sourceMappingURL=akunkepsek.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalkosongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HalkosongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HalkosongPage = /** @class */ (function () {
    function HalkosongPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HalkosongPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HalkosongPage');
    };
    HalkosongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-halkosong',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/halkosong/halkosong.html"*/'<!--\n  Generated template for the HalkosongPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>halkosong</ion-title>\n  </ion-navbar>\n\n</ion-header>\n -->\n<ion-content padding>\n  <div class="fill">\n    <ion-icon name="close-circle"></ion-icon>\n    <h4>Belum ada Data!</h4>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/halkosong/halkosong.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HalkosongPage);
    return HalkosongPage;
}());

//# sourceMappingURL=halkosong.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_bursa_bursa__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ebook_ebook__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pmb_pmb__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_kontak_kontak__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sejarah_sejarah__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_visimis_visimis__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_jurusan_jurusan__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_bursa_detail_bursa_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_berita_detail_berita_detail__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_detailakun_detailakun__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_akunsiswa_akunsiswa__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_jadwalpelajaran_jadwalpelajaran__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_notifikasi_notifikasi__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_jadwalmengajar_jadwalmengajar__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_jurnalkbm_jurnalkbm__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_absensi_absensi__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_pembayaran_pembayaran__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_profile_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_fasilitas_fasilitas__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_halkosong_halkosong__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_onesignal_ngx__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_auth_service_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_tabungan_tabungan__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_pengaturan_pengaturan__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_aplikasi_aplikasi__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_faq_faq__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_absensiguru_absensiguru__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































// import { OneSignal } from '@ionic-native/onesignal';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bursa_bursa__["a" /* BursaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ebook_ebook__["a" /* EbookPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pmb_pmb__["a" /* PmbPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_kontak_kontak__["a" /* KontakPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sejarah_sejarah__["a" /* SejarahPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_visimis_visimis__["a" /* VisimisPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_jurusan_jurusan__["a" /* JurusanPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bursa_detail_bursa_detail__["a" /* BursaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_berita_detail_berita_detail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_detailakun_detailakun__["a" /* DetailakunPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_jadwalmengajar_jadwalmengajar__["a" /* JadwalmengajarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notifikasi_notifikasi__["a" /* NotifikasiPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_jurnalkbm_jurnalkbm__["a" /* JurnalkbmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_akunsiswa_akunsiswa__["a" /* AkunsiswaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_jadwalpelajaran_jadwalpelajaran__["a" /* JadwalpelajaranPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_absensi_absensi__["a" /* AbsensiPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_pembayaran_pembayaran__["a" /* PembayaranPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_fasilitas_fasilitas__["a" /* FasilitasPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_halkosong_halkosong__["a" /* HalkosongPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tabungan_tabungan__["a" /* TabunganPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_pengaturan_pengaturan__["a" /* PengaturanPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_aplikasi_aplikasi__["a" /* AplikasiPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_absensiguru_absensiguru__["a" /* AbsensiguruPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/absensi/absensi.module#AbsensiPageModule', name: 'AbsensiPage', segment: 'absensi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/absensiguru/absensiguru.module#AbsensiguruPageModule', name: 'AbsensiguruPage', segment: 'absensiguru', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/akunkepsek/akunkepsek.module#AkunkepsekPageModule', name: 'AkunkepsekPage', segment: 'akunkepsek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aplikasi/aplikasi.module#AplikasiPageModule', name: 'AplikasiPage', segment: 'aplikasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/akunsiswa/akunsiswa.module#AkunsiswaPageModule', name: 'AkunsiswaPage', segment: 'akunsiswa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/berita-detail/berita-detail.module#BeritaDetailPageModule', name: 'BeritaDetailPage', segment: 'berita-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bursa-detail/bursa-detail.module#BursaDetailPageModule', name: 'BursaDetailPage', segment: 'bursa-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bursa/bursa.module#BursaPageModule', name: 'BursaPage', segment: 'bursa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailakun/detailakun.module#DetailakunPageModule', name: 'DetailakunPage', segment: 'detailakun', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ebook/ebook.module#EbookPageModule', name: 'EbookPage', segment: 'ebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/halkosong/halkosong.module#HalkosongPageModule', name: 'HalkosongPage', segment: 'halkosong', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/halsiswa/halsiswa.module#HalsiswaPageModule', name: 'HalsiswaPage', segment: 'halsiswa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jadwalmengajar/jadwalmengajar.module#JadwalmengajarPageModule', name: 'JadwalmengajarPage', segment: 'jadwalmengajar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jadwalpelajaran/jadwalpelajaran.module#JadwalpelajaranPageModule', name: 'JadwalpelajaranPage', segment: 'jadwalpelajaran', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jurnalkbm/jurnalkbm.module#JurnalkbmPageModule', name: 'JurnalkbmPage', segment: 'jurnalkbm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kontak/kontak.module#KontakPageModule', name: 'KontakPage', segment: 'kontak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pembayaran/pembayaran.module#PembayaranPageModule', name: 'PembayaranPage', segment: 'pembayaran', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifikasi/notifikasi.module#NotifikasiPageModule', name: 'NotifikasiPage', segment: 'notifikasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengaturan/pengaturan.module#PengaturanPageModule', name: 'PengaturanPage', segment: 'pengaturan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fasilitas/fasilitas.module#FasilitasPageModule', name: 'FasilitasPage', segment: 'fasilitas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pmb/pmb.module#PmbPageModule', name: 'PmbPage', segment: 'pmb', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiledetail/profiledetail.module#ProfiledetailPageModule', name: 'ProfiledetailPage', segment: 'profiledetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabungan/tabungan.module#TabunganPageModule', name: 'TabunganPage', segment: 'tabungan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visimis/visimis.module#VisimisPageModule', name: 'VisimisPage', segment: 'visimis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jurusan/jurusan.module#JurusanPageModule', name: 'JurusanPage', segment: 'jurusan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sejarah/sejarah.module#SejarahPageModule', name: 'SejarahPage', segment: 'sejarah', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bursa_bursa__["a" /* BursaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ebook_ebook__["a" /* EbookPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pmb_pmb__["a" /* PmbPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_kontak_kontak__["a" /* KontakPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sejarah_sejarah__["a" /* SejarahPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_visimis_visimis__["a" /* VisimisPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_jurusan_jurusan__["a" /* JurusanPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bursa_detail_bursa_detail__["a" /* BursaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_berita_detail_berita_detail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_detailakun_detailakun__["a" /* DetailakunPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_jadwalmengajar_jadwalmengajar__["a" /* JadwalmengajarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notifikasi_notifikasi__["a" /* NotifikasiPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_jurnalkbm_jurnalkbm__["a" /* JurnalkbmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_akunsiswa_akunsiswa__["a" /* AkunsiswaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_jadwalpelajaran_jadwalpelajaran__["a" /* JadwalpelajaranPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_absensi_absensi__["a" /* AbsensiPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_pembayaran_pembayaran__["a" /* PembayaranPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_fasilitas_fasilitas__["a" /* FasilitasPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_halkosong_halkosong__["a" /* HalkosongPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tabungan_tabungan__["a" /* TabunganPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_pengaturan_pengaturan__["a" /* PengaturanPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_aplikasi_aplikasi__["a" /* AplikasiPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_absensiguru_absensiguru__["a" /* AbsensiguruPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_38__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_onesignal_ngx__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_34__pages_profile_profile__["a" /* ProfilePage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal_ngx__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal) {
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.oneSignal.startInit('ba9338c6-fb67-4424-8246-fbf20d61f761', '115143871895');
            // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            // this.oneSignal.handleNotificationReceived().subscribe(() => {
            //   // do something when notification is received
            //   alert("WOW!");
            // });
            // this.oneSignal.handleNotificationOpened().subscribe(() => {
            //   // do something when a notification is opened
            // });
            // this.oneSignal.endInit();
            // if (isCordovaAvailable()){
            //   this.oneSignal.startInit(oneSignalAppId, sender_id);
            //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            //   this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
            //   this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
            //   this.oneSignal.endInit();
            // }
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("ba9338c6-fb67-4424-8246-fbf20d61f761", "115143871895")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        }).catch(function (e) {
            console.log(e);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal_ngx__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        this.server = "http://153.92.4.64/api/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    Object.defineProperty(AuthServiceProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceProvider.prototype.getAll = function (path, category) {
        if (category != "") {
            path = path + "/" + category;
        }
        console.log(this.server + path);
        var response = this.http.get(this.server + path).map(function (res) { return res.json(); });
        return response;
    };
    AuthServiceProvider.prototype.getSlide = function (path) {
        console.log(this.server + path);
        var response = this.http.get(this.server + path).map(function (res) { return res.json(); });
        return response;
    };
    AuthServiceProvider.prototype.postData = function (credentials, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let headers = new Headers();
            _this.http.post(_this.server + url, JSON.stringify(credentials), { headers: _this.headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailakunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailakunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailakunPage = /** @class */ (function () {
    function DetailakunPage(platform, params, viewCtrl, storage, http) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.http = http;
        this.datadosen = [];
        this.getRemoteData();
    }
    DetailakunPage.prototype.getRemoteData = function () {
        var _this = this;
        this.datadosen = [];
        // this.loadLoading();
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.http.get('http://153.92.4.64/api/showgurupegawaidetail/' + resposeData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
                    // this.loading.dismiss();
                    // console.log(data);
                    if (data.data === undefined || data.data.length == 0) {
                        // this.loadToast("Anda tidak mempunyai jurnal untuk diisi!")
                    }
                    else {
                        _this.datadosen = data.data;
                        console.log(_this.datadosen);
                    }
                });
            }
            else {
                console.log(resp);
            }
        });
    };
    DetailakunPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailakunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailakun',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/detailakun/detailakun.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Detail Akun\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="http://153.92.4.64/img/foto/gurupegawai/{{ datadosen.foto }}">\n        </ion-avatar>\n        <h2>{{datadosen.nama}}</h2>\n        <p>NIP - {{datadosen.nip}}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n        <p>e-mail</p>\n        <h3>{{datadosen.email}}</h3>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="home" item-start></ion-icon>\n        <p>Alamat</p>\n        <h3>{{datadosen.alamat}}</h3>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        <p>Telepon</p>\n        <h3>{{datadosen.telepon}}</h3>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="body" item-start></ion-icon>\n        <p>TTL</p>\n        <h3>{{datadosen.tempat_lahir}}, {{datadosen.tanggal_lahir}}</h3>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/detailakun/detailakun.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], DetailakunPage);
    return DetailakunPage;
}());

//# sourceMappingURL=detailakun.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengaturanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aplikasi_aplikasi__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PengaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PengaturanPage = /** @class */ (function () {
    function PengaturanPage(navCtrl, storage, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
    }
    PengaturanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengaturanPage');
    };
    PengaturanPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu...',
        });
        this.loading.present();
    };
    PengaturanPage.prototype.takeMeBack = function () {
        this.loadLoading();
        this.navCtrl.pop();
        this.storage.clear().then(function (val) {
            console.log('datanya: ' + val);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.loading.dismiss();
    };
    PengaturanPage.prototype.faq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__faq_faq__["a" /* FaqPage */]);
    };
    PengaturanPage.prototype.aplikasi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aplikasi_aplikasi__["a" /* AplikasiPage */]);
    };
    PengaturanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pengaturan',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pengaturan/pengaturan.html"*/'<!--\n  Generated template for the PengaturanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pengaturan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item (click)="faq()">\n      <ion-icon name="help-circle" item-start></ion-icon>\n      F.A.Q.\n    </ion-item>\n    <ion-item (click)="aplikasi()">\n      <ion-icon name="information-circle" item-start></ion-icon>\n      Tentang Melah\n    </ion-item>\n    <ion-item (click)="takeMeBack()">\n      <ion-icon name="power" item-start></ion-icon>\n      Logout\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/pengaturan/pengaturan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PengaturanPage);
    return PengaturanPage;
}());

//# sourceMappingURL=pengaturan.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__akunsiswa_akunsiswa__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__akunkepsek_akunkepsek__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, authService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "email": "", "password": "" };
        this.getRemoteData();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loadLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Tunggu...',
        });
        this.loading.present();
    };
    LoginPage.prototype.getRemoteData = function () {
        var _this = this;
        console.log("Its work!");
        this.storage.get('resposeData').then(function (resp) {
            if (resp == null) {
                console.log('kosong: ' + resp);
                _this.cek = false;
            }
            else {
                _this.loadLoading();
                console.log('ada: ' + resp);
                _this.cek = true;
                var datanya = JSON.parse(resp);
                if (datanya.role == "siswa")
                    _this.tipe = 0;
                else if (datanya.role == "guru")
                    _this.tipe = 1;
                console.log(_this.tipe);
                _this.loading.dismiss();
            }
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loadLoading();
        this.storage.clear().then(function (val) {
            console.log(val);
        });
        if (this.userData.email && this.userData.password) {
            this.authService.postData(this.userData, "auth/login").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData.data.status == "Login berhasil!") {
                    _this.storage.set('resposeData', JSON.stringify(_this.resposeData.data));
                    _this.loading.dismiss();
                    if (_this.resposeData.data.role == "guru") {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
                    }
                    else if (_this.resposeData.data.role == "siswa") {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__akunsiswa_akunsiswa__["a" /* AkunsiswaPage */]);
                    }
                    else if (_this.resposeData.data.role == "kepsek") {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__akunkepsek_akunkepsek__["a" /* AkunkepsekPage */]);
                    }
                    else {
                        _this.presentToast("Maaf, Anda tidak dapat mengakses halaman ini!");
                    }
                    // this.storage.get('resposeData').then((val) => {
                    // 	if (val != null) {
                    // 	}
                    // })
                }
                else {
                    _this.loading.dismiss();
                    _this.presentToast("e-mail/password salah!");
                }
            }, function (err) {
                //Connection failed message
                _this.loading.dismiss();
                _this.presentToast("e-mail/password salah!");
            });
        }
        else {
            this.loading.dismiss();
            this.presentToast("e-mail/password tidak boleh kosong!");
        }
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content *ngIf="!cek" text-center class="bg-login vertical-align-content">\n  <ion-list class="login-pane">\n    <img class="logo" src="assets/imgs/icons/icon.png">\n    <ion-item class="input-bg top">\n      <ion-label class="label" stacked>NIP/NIPD</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n    <ion-item class="input-bg">\n      <ion-label class="label" stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n\n    <button ion-button block class="bg-green" (click)="login()">Login</button>\n    <!-- <div class="footer">\n      <div class="wrapper">\n        <div class="bt"><span>Lupa Password</span></div> | <div class="bt"><span>Registrasi</span></div>\n      </div>\n    </div> -->\n  </ion-list>\n</ion-content>\n<page-akunsiswa *ngIf="(cek && tipe == 0)"></page-akunsiswa>\n<page-contact *ngIf="(cek && tipe == 1)"></page-contact>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotifikasiPage = /** @class */ (function () {
    function NotifikasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotifikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifikasiPage');
    };
    NotifikasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifikasi',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/notifikasi/notifikasi.html"*/'<!--\n  Generated template for the JadwalmengajarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Pemberitahuan</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  <ion-content>\n    <!-- <ion-list>\n      <ion-list-header>TEST</ion-list-header>\n      <ion-item>Generasi Millennial Road Safety Festifal SMA/SMK seprovinsi Bali</ion-item>\n      <ion-item>Pengarah Persiapan Ujian Praktik Penjaskes dan Pariwisata</ion-item>\n      <ion-item>PENSI PRASTYAM ;alsldk;askd</ion-item>\n    </ion-list>\n  \n    <ion-list>\n      <ion-list-header>tes Baru</ion-list-header>\n      <ion-item>PENERIMAAN SISWA BARU TAHUN PELAJARAN 2019/2020</ion-item>\n      <ion-item>Pentas Siswa Seni Ke-4 di SMK Prshanti Nilayam</ion-item>\n      <ion-item>Informasi Ujian Bulan Januari</ion-item>\n    </ion-list> -->\n    <page-halkosong></page-halkosong>\n  </ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/notifikasi/notifikasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotifikasiPage);
    return NotifikasiPage;
}());

//# sourceMappingURL=notifikasi.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map