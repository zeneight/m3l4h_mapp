import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeritaDetailPage } from './berita-detail';

@NgModule({
  declarations: [
    BeritaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BeritaDetailPage),
  ],
})
export class BeritaDetailPageModule {}
