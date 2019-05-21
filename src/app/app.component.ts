import { Component } from '@angular/core';
import{LoginService} from'./login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';



import{finalize}from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>; 
public user: string;
undefined:string="";

  constructor(private app: LoginService, private http: HttpClient, private router: Router,private authService: AuthService) {
      this.app.authenticate("", "");
    }
    ngOnInit() {
      this.isLoggedIn$ = this.authService.isLoggedIn; 
    }

    // onLogout(){
    //   this.authService.logout();                      
    // }
    logout() {
      this.http.post('logout', {}).pipe(finalize(() => {
          this.app.authenticated = false;
          this.router.navigateByUrl('/login');
      })).subscribe();
      this.authService.logout();
    }
    

}
