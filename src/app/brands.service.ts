import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandsService implements OnInit  {

  constructor(private _httpClient : HttpClient) {

   }

ngOnInit(): void {
      this.getBrands()

}

getBrands():Observable<any>{
return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
}


   getBrandDetails(id : string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    
  }
}
