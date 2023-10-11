import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
      // to listen to variable must be the var is from BehaviorSubject type
    userData: BehaviorSubject<any> = new BehaviorSubject(null);
  
  
    constructor(private _httpClient:HttpClient ,private _router:Router) { 
      //by refresh clear all data because run this file
      //so if condition (Are localStorage have data? call function decodedData()) 
      if(localStorage.getItem('userToken')){
         this.decodedData()
      }
      }


   decodedData(){
      let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
      let decodedToken : any = jwtDecode(encodeToken);
      console.log(decodedToken);
      this.userData.next(decodedToken);

     }
     
   atStart(){
            if (localStorage.getItem('userToken')){
              this._router.navigate(['/home'])

            }
   }

  signUp(data:any):Observable<any>{
return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }

  
  signIn(data:any):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
      }

      logOut(){
        localStorage.removeItem('userToken');
         this.userData.next(null);
        this._router.navigate(['/signin'])

      }
}


{

}