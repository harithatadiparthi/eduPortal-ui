import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})                                                                 
export class HttpService {

  constructor(private http:Http) {
   }
   data()
   {
     return this.http.get('assets/data.json');
   }

}