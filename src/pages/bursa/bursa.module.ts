import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BursaPage } from './bursa';

@NgModule({
  declarations: [
    BursaPage,
  ],
  imports: [
    IonicPageModule.forChild(BursaPage),
  ],
})
export class BursaPageModule {}
