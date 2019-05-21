import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
 title = 'Demo';
  greeting = {};
 constructor(private app: LoginService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }
  
ngOnInit() {
  }
  authenticated() { return this.app.authenticated; }
  

}


