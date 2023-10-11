import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { WishList } from '../wish-list';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  id: string = '';
  
  wishList: WishList[] = [];

  isItemWished = false

  constructor(private _wishlistService: WishlistService) {
    this.getWishList()
  }

  getWishList() {
    this._wishlistService.getWishList().subscribe({
      next: (res) => {
        console.log(res.data)
        this.wishList = res.data
        if (this.wishList.length > 0) {
          this.isItemWished = true
          localStorage.getItem("WishList")
       

        }else{
          this.isItemWished = false
        }

      }
    })
  }


  removeWishList(id: string) {
    this._wishlistService.removeWishList(id).subscribe({
      next: (res) => {
        console.log(res)
        localStorage.setItem("WishList", res.data)
        this._wishlistService.numOfWishesItems.next(res.data.length)
        this.getWishList()

      }
    })
  }

  

}
