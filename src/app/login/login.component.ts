import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { NavigationEnd, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import{Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
// import {SocialLoginModule} from 'ng-social-login-module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  // providers: [SocialLoginModule, AuthService]
})
export class LoginComponent implements OnInit {
public username:string;
public password:string;
public msg:string;
public showNav:boolean;
users: Observable<User[]>;
  constructor(private service :LoginService,private _router:Router,
    private _activatedRoute:ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }
usermodel:User= new User("","");

/*onSubmit()
{

  console.log("User Name "+this.usermodel.userName+"PASSWORD"+this.usermodel.password);
    this.username =this.usermodel.userName;
    this.password=this.usermodel.password
    this.service.getUser(this.username,this.password);

}*/
login() {
    this.service.authenticate(this.usermodel, () => {
        this._router.navigateByUrl('/');
        this.showNav=true;
        this.authService.login;
    });

    this.msg="User name and password are incorrect."
    return false;
    
  }


}
