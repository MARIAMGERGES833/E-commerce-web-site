import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn :'root'
})

export class authGuard implements CanActivate{
  constructor(private _router : Router){}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {


      if(localStorage.getItem('userToken') != null){
         return true

      }else{
        this._router.navigate(['/signin'])
        return false
      }
  }
 
    
}
