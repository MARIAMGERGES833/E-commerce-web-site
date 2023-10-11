import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Prouducts } from '../prouducts';
import { CartService } from '../shared/service/cart.service';
import { WishlistService } from '../wishlist.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   providers: [MessageService]
})
export class ProductsComponent implements OnInit {

  addIdHeart: string[] = []
  isItemWished:boolean = false

  products: Prouducts[] = []

  constructor(private _products: ProductsService,
    private _cart: CartService,
    private _wishlistService: WishlistService,
    private _messageService: MessageService
    ) {


  }

  @Input() searchKey:string = "";

  ngOnInit(): void {
    this.getAllData()
    this.addIdHeart = localStorage.getItem("WishList")?.split(",") || []
    console.log(this.addIdHeart)
  }





  getAllData() {
    this._products.getProducts().subscribe({
      next: (response) => this.products = response.data,
      error: (err) => { }
    })
  }


  addToCart(id: string) {
    this._cart.addProductToCart(id).subscribe({
      next: (res) => {
        this._cart.numOfCartItems.next(res.numOfCartItems)
        this._messageService.add({ severity: 'success', summary: 'Success', detail: res.message });

      }
    })
  }

  addWishList(id: string, e: any) {
    console.log(id)
    
    this._wishlistService.addWishList(id).subscribe({
      next: (res) => {
        console.log(res, e  , "lllllllll")
        console.log(this.addIdHeart.join(" "))


        if (e.target.classList.contains('text-danger')) {

          this.isItemWished = false
          e.target.classList.replace ('text-danger', 'text-main');
          console.log("yala remove and change color of heart")
          this._wishlistService.removeWishList(id).subscribe({
            next: (res)=> {
              console.log (res, "done")
              localStorage.setItem("WishList", res.data)
              this._wishlistService.numOfWishesItems.next(res.data.length)
              this._messageService.add({ severity: 'error', summary: 'Removed', detail: res.message });

            }
          })
        } else {
          this.isItemWished = true
          console.log(`item wishlist`, res.data)
          e.target.classList.replace('text-main', 'text-danger');
          localStorage.setItem("WishList", res.data)
          this._wishlistService.numOfWishesItems.next(res.data.length)
          this._messageService.add({ severity: 'success', summary: 'Success', detail: res.message });

        }

      }
    })
  }

}
