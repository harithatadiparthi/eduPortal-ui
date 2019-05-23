import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UI';
  constructor (private httpService: HttpService, private orderpipe: OrderPipe) { }
  arrData: string [];
  p: number = 1;
  order: string = 'CustomerId';
  sorteddata: any[];
  reverse: boolean = false;
  
 /* ngOnInit () {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
        
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );*/

    ngOnInit() {
      this.httpService.data()
        .subscribe(res => {
          // console.log(res.json())
          this.arrData = res.json();
        });
    this.sorteddata = this.orderpipe.transform(this.arrData, 'CustomerId')

  }
  setorder(value: string) {
    if (this.order == value) {
      this.reverse = !this.reverse
    }
    this.order = value;
  }
  }
  




  
