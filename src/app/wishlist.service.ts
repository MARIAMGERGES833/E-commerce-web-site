import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  numOfWishesItems:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _httpClient : HttpClient) { 
   this.getWishList().subscribe({
      next : (res)=>{
        console.log(`no of wishes` , res.data.length)
        this.numOfWishesItems.next(res.data.length)
      }
   })

  }

 


  addWishList(id : string):Observable<any>{
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
      "productId": `${id}`

    })
  }

 
  

  getWishList():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist ")
  }

  removeWishList(id : string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }

  
}
