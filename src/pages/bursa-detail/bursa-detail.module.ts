import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BursaDetailPage } from './bursa-detail';

@NgModule({
  declarations: [
    BursaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BursaDetailPage),
  ],
})
export class BursaDetailPageModule {}
