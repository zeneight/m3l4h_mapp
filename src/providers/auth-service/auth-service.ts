import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthServiceProvider {
  static get parameters(){
  	return[[Http]];
  }

  server: string ="http://153.92.4.64/api/";
  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });

  constructor(public http: Http) {
  }
  getAll(path,category){
    if (category != ""){
      path = path+"/"+category;
    }
    console.log(this.server+path);
  	var response = this.http.get(this.server+path).map(res => res.json());
	  return response;
  }
  getSlide(path){
    console.log(this.server+path);
  	var response = this.http.get(this.server+path).map(res => res.json());
	  return response;
  }
  postData(credentials, url){
    return new Promise((resolve, reject) =>{
      // let headers = new Headers();
      this.http.post(this.server+url, JSON.stringify(credentials), {headers: this.headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });
    });
  }
}