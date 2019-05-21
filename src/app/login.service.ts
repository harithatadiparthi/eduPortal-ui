import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { User } from './user';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
authenticated = false;
private url :string ="http://localhost:8080/user";
  constructor(private http: HttpClient) {
  }

  authenticate(usermodel, callback) {
     //  const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
        const headers = new HttpHeaders(usermodel ? {
            authorization : 'Basic ' + btoa( usermodel.userName+ ':' + usermodel.password)
        } : {});
       // headers.append('Access-Control-Allow-Origin','*');

        console.log("user name is "+usermodel.userName);

        this.http.get(this.url, {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }
















/*private url:string ="http://localhost:8080/account/login";
public responseData:string="";
  public userData:string="";
  public jsonObject:any;
  public responseStatus:string="";
  public invalidData:string="";
/*constructor(private http: HttpClient) { }
  getUser(username:String ,password:String): Observable<Object> {
   // return this.http.get(`${this.url}/${username}/${password}`);
   return this.http.post(url,{userName:this.username,
     password:this.password}).
  }*/
    /*constructor(private _http:HttpClient,
   private _router:Router) { }

 public getUser(username:String ,password:String)
  {
    console.log("In sendRequestToServer  method");
    this.userData="";
   let observableObj= this._http.post(this.url,
     {
       "userName":username,
       "password":password
     }
    );
    observableObj.subscribe(
      (responseData)=>{
        console.log(responseData);
        this.userData=JSON.stringify(responseData);
       // console.log("User data \n"+this.userData);
       // this.userData=JSON.stringify(responseData.toString());
        //console.log("user Data \n"+this.userData.toString())
       this.jsonObject= JSON.parse(this.userData);
      this.responseStatus =this.jsonObject.responseStatus;
      console.log("response Status "+this.responseStatus);
       if("Failure"==this.responseStatus)
       {
         this.invalidData=this.jsonObject.responseMessage;
       this._router.navigate(["/login",this.invalidData]);
       }//if("Failure"==this.responseStatus)
       else
       this._router.navigate(["/login",this.userData]);
       // this.
      }
    );*/
  
 // }//sendRequestToServer*/

}
