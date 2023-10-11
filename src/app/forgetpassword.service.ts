import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  baseUrl : string = `https://ecommerce.routemisr.com/api/v1/auth/`
  constructor(private _httpClient : HttpClient) { }

  forgetPassword(userEmail : object):Observable<any>{
    return this._httpClient.post(this.baseUrl + 'forgotPasswords' , userEmail)
  }


  resetCode(resetCode : object):Observable<any>{
    return this._httpClient.post(this.baseUrl + 'verifyResetCode' , resetCode)
  }

  resetPassword(resetPassword : object):Observable<any>{
    return this._httpClient.put(this.baseUrl + 'resetPassword' , resetPassword)
  }
}
