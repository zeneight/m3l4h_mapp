import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PmbPage } from './pmb';

@NgModule({
  declarations: [
    PmbPage,
  ],
  imports: [
    IonicPageModule.forChild(PmbPage),
  ],
})
export class PmbPageModule {}
