webpackJsonp([1],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalsiswaPageModule", function() { return HalsiswaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__halsiswa__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HalsiswaPageModule = /** @class */ (function () {
    function HalsiswaPageModule() {
    }
    HalsiswaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__halsiswa__["a" /* HalsiswaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__halsiswa__["a" /* HalsiswaPage */]),
            ],
        })
    ], HalsiswaPageModule);
    return HalsiswaPageModule;
}());

//# sourceMappingURL=halsiswa.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalsiswaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailakun_detailakun__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(18);
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
 * Generated class for the HalsiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HalsiswaPage = /** @class */ (function () {
    function HalsiswaPage(navCtrl, storage, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.datasiswa = [];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.getRemoteData();
    }
    HalsiswaPage.prototype.openModal = function (chn) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__detailakun_detailakun__["a" /* DetailakunPage */], chn);
        modal.present();
    };
    HalsiswaPage.prototype.getRemoteData = function () {
        var _this = this;
        this.storage.get('resposeData').then(function (resp) {
            if (resp !== null) {
                // console.log(resp);
                var resposeData = JSON.parse(resp);
                _this.name_user = resposeData.name;
                _this.http.get('http://153.92.4.64/api/showsiswadetail/' + resposeData.id).subscribe(function (data) {
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
    HalsiswaPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    HalsiswaPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    HalsiswaPage.prototype.takeMeBack = function () {
        this.navCtrl.pop();
        this.storage.clear().then(function (val) {
            console.log(val);
        });
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    HalsiswaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-halsiswa',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/halsiswa/halsiswa.html"*/'<ion-header>\n  <ion-toolbar hideBackButton>\n    <ion-title>Akun Saya</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="takeMeBack()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="bg-style">\n\n  <ion-item class="padding-top">\n    <ion-thumbnail item-start>\n      <img src="http://siska.smkprshantinilayamkuta.sch.id/img/avatar.png">\n    </ion-thumbnail>\n    <h2>{{ name_user }}</h2>\n    <p>NIS • {{ datasiswa.nis }}</p>\n    <p>{{ datasiswa.nama_kelas }}</p>\n    <button ion-button clear item-end (click)="openModal({charNum: 0})">Detail</button>\n  </ion-item>\n  <ion-list>\n    <ion-list-header class="no-margin">\n      Selamat Datang!\n    </ion-list-header>\n    <ion-item (click)="jadwalMengajar()">\n      <ion-icon name=\'bookmarks\' color="danger" item-start></ion-icon>\n      Jadwal Mengajar\n      <ion-note item-end><small>Jadwal mengajar Anda</small></ion-note>\n    </ion-item>\n    \n    <ion-item (click)="jurnalKbm()">\n        <ion-icon name=\'albums\' color="danger" item-start></ion-icon>\n        Jurnal KBM\n        <ion-note item-end><small>Jurnal Anda</small></ion-note>\n      </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'body\' color="danger" item-start></ion-icon>\n      Penilaian Sikap Spiritual\n      <ion-note item-end><small>Sikap Spiritual</small></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'chatbubbles\' color="danger" item-start></ion-icon>\n      Penilaian Sikap Sosial\n      <ion-note item-end><small>Sikap Sosial</small></ion-note>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-row>\n    <ion-col><ion-icon name="ionic" color="primary"></ion-icon></ion-col>\n    <ion-col><ion-icon name="logo-angular"></ion-icon></ion-col>\n    <ion-col><ion-icon name="heart" color="danger"></ion-icon></ion-col>\n    <ion-col><ion-icon name="ionitron" color="primary"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="happy" color="vibrant"></ion-icon></ion-col>\n    <ion-col><ion-icon name="people"></ion-icon></ion-col>\n    <ion-col><ion-icon name="person"></ion-icon></ion-col>\n    <ion-col><ion-icon name="contact"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="apps"></ion-icon></ion-col>\n    <ion-col><ion-icon name="lock"></ion-icon></ion-col>\n    <ion-col><ion-icon name="key" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="unlock"></ion-icon></ion-col>\n  </ion-row> -->\n  \n\n  <!-- <ion-grid>\n    <ion-row class="bg-white-2">\n      <ion-col col-6>\n        <div class="card">\n          <div class="card-header">\n            \n            <img src="assets/imgs/icons/Jadwal.png">\n          </div>\n          <div class="card-content">\n            <span>Jadwal Pelajaran</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="card">\n          <div class="card-header">\n           \n            <img src="assets/imgs/icons/Jurnal.png">\n          </div>\n          <div class="card-content">\n            <span>Jurnal KBM</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="card">\n          <div class="card-header">\n            <img src="assets/imgs/icons/Spiritual.png">\n          </div>\n          <div class="card-content">\n            <span>Penilaian Sikap Spiritual</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="card">\n          <div class="card-header">\n            <img src="assets/imgs/icons/Sosial.png">\n          </div>\n          <div class="card-content">\n            <span>Penilaian Sikap Sosial</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n \n</ion-content>'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/halsiswa/halsiswa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HalsiswaPage);
    return HalsiswaPage;
}());

//# sourceMappingURL=halsiswa.js.map

/***/ })

});
//# sourceMappingURL=1.js.map