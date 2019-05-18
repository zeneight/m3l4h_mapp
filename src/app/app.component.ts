import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oneSignal: OneSignal) {
    platform.ready().then(() => {
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

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
    
      window["plugins"].OneSignal
        .startInit("ba9338c6-fb67-4424-8246-fbf20d61f761", "115143871895")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    }).catch(e => {
      console.log(e);
  });
  }
}
