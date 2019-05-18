webpackJsonp([0],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiledetailPageModule", function() { return ProfiledetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profiledetail__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfiledetailPageModule = /** @class */ (function () {
    function ProfiledetailPageModule() {
    }
    ProfiledetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profiledetail__["a" /* ProfiledetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profiledetail__["a" /* ProfiledetailPage */]),
            ],
        })
    ], ProfiledetailPageModule);
    return ProfiledetailPageModule;
}());

//# sourceMappingURL=profiledetail.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiledetailPage; });
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
 * Generated class for the ProfiledetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfiledetailPage = /** @class */ (function () {
    function ProfiledetailPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ProfiledetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfiledetailPage');
    };
    ProfiledetailPage.prototype.getData = function () {
        var _this = this;
        var url = "http://153.92.4.64/api/info";
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.items = result.data;
            // console.log(result.data);
        });
    };
    ProfiledetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profiledetail',template:/*ion-inline-start:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profiledetail/profiledetail.html"*/'<!--\n  Generated template for the ProfiledetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 align="center">Profile Sekolah</h1>\n<p text-wrap style="text-align:justify;">\n  Pada dekade terakhir ini dampak globalisasi dan teknologi informasi sudah semakin nyata dirasakan  oleh seluruh lapisan kehidupan masyarakat dunia. Dampak yang dimaksudkan adalah semakin meningkatnya aktvitas dan mobilitas manusia baik di tingkat nasional, regional, maupun di tingkat global. Meningkatnya aktivitas dan mobilitas manusia menimbulkan kebutuhan-kebutuhan, persoalan-persoalan, dan tantangan-tantangan kehidupan yang sangat kompleks.\n  Dalam memenuhi kebutuhan-kebutuhan, persoalan-persoalan, dan tantangan-tantangan hidup yang sangat kompleks tersebut, munculah berbagai insudstri di berbagai sector perekonomian yang sangat pesat dengan jumlah dan kualitas yang semakin meningkat pula. Sejalan dengan perkembangan arus globalisasi  tersebut pariwisata juga telah berkembang dan menjadi salah satu industri yang sangat dinamis dan prospektif. Dilihat dari segi penciptaan penambahan nilai dan kesempatan kerja pariwisata merupakan industri terbesar didunia.\n  Secara sederhana, pariwisata diidentikan sebagai industri yang hanya sekedar menyuguhkan keanyamanan dan kesenangan bagi para wisatawan atau bagi orang-orang yang sedang melakukan perjalanan wisata. Akan tetapi dengan semakin meningkatnya perekonomian masyarakat yang melakukan perjalanan wiasata , maka kebutuhan-kebutuhan, tuntutan-tuntutan, persoalan-persoalan, yang ditimbulkan juga semakin meningkat. Hal ini, menimbulkan persaingan yang sangat ketat di antara produsen pariwisata baik dari segi kuantitas dan kualitas produk dan jasanya. Di samping itu juga sekaligus menimbulkan kesempatan dan tantangan bagi pelaku dan pengembang pariwisata.\n  Ketatnya persaingan di industri pariwisata tersebut menuntut tersedianya layanan produk dan jasa yang berkualitas, sarana dan prasarana mutakhir, dan sumber daya manusia yang handal dan kompeten di bidang profesi dan di jenjang jabatannya. Tuntutan terhadap sumberdaya manusia yang handal, kompeten di bidang profesi dan di jenjang jabatannya untuk dapat menghasilkan produk dan jasa yang berkualitas, maka sangat dibutuhkan lembaga pendidikan dan pelatihan perhotelan dan kepariwisataan yang professional dan berkualitas unggul. Hal ini didasarkan pula atas dinamika \n</p>\n</ion-content>\n'/*ion-inline-end:"/home/prabhuds/Apps/node/new/STPBI/src/pages/profiledetail/profiledetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProfiledetailPage);
    return ProfiledetailPage;
}());

//# sourceMappingURL=profiledetail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map