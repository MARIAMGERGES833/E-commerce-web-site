import { Component ,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Prouducts } from '../prouducts';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/service/cart.service';
import { MessageService } from 'primeng/api';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[MessageService]
})
export class ProductDetailsComponent implements OnInit {
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
  
    },
    nav: true
  }
  productId : string = '';
  addIdHeart: string[] = []
  isItemWished:boolean = false

  productDetails : Prouducts = {} as Prouducts


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
    private _messageService: MessageService,
    private _cart :CartService,
    private _wishlistService: WishlistService,
  ) {
    

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      console.log(res.params.id);
      this.productId = res.params.id;
    });
    this._productsService.getDetails(this.productId).subscribe({
      next:(res)=>{console.log(res)
      this.productDetails = res.data
      }
    })
    this.addIdHeart = localStorage.getItem("WishList")?.split(",") || []
  }

  addToCart(id:string){
    this._cart.addProductToCart(id).subscribe({
     next:(res)=>{
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
