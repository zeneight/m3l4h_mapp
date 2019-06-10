import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PushProvider {
   // Produc ID
   product_id: any;
   // Landing pages
   landing_page: any;
   // notifikasi pages
   notifikasi_page: any;
}