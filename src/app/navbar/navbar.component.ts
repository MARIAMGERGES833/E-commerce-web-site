import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/assets/core/services/auth.service';
import { CartService } from '../shared/service/cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector:'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls:['./navbar.component.css'],
})
export class NavbarComponent {
  isLogin : boolean = false;
  numOfCartItems:number = 0
  numOfWishesItems:number = 0
  constructor (private _authService : AuthService , private _cartService: CartService , private _wishService : WishlistService){ 
   
   }


  ngOnInit(): void { this._authService.userData.subscribe((res)=>{
        // to nav listen to all change in this variable (Are user login?)
    if(this._authService.userData.getValue()){
              this.isLogin = true;
              console.log(`log true`)
         }
         else{
              this.isLogin = false;
              console.log(`log false`)
    
         }
  })
  this._cartService.numOfCartItems.subscribe((res)=>{
    this.numOfCartItems = res
      })
  this._wishService.numOfWishesItems.subscribe({
    next: (res)=>{
      this.numOfWishesItems = res
    }
  })
    this._authService.decodedData()
    // console.log(`oninit`)
    //   if(this._authService.userData !== null){
    //       this.isLogin = true;
    //       console.log(`log true`)
    //  }
    //  else{
    //       this.isLogin = false;
    //       console.log(`log false`)

    //  }
  }

  logOut(){
    this._authService.logOut()
    this.isLogin = false;

  }
}
