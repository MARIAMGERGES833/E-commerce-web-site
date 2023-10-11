import { Component,  OnInit } from '@angular/core';
import { CartService } from '../shared/service/cart.service';
import { Cart } from './interface/cart';
import { AuthService } from 'src/assets/core/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html',
  styleUrls:['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _cart : CartService , private _authService:AuthService){}

    cartDetails : Cart = {} as Cart
    isHaveItem : boolean = false

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this._cart.getCart().subscribe({
      next:(res)=> {
        console.log(res);
      this.cartDetails= res;
      this.isHaveItem = true;
    },
    error: (err)=>{
      if (err.error.message){
        console.log(err)
        console.log(err.error.message)

        this.isHaveItem = false;

      }
    }
    })
  }

  getUpdate(count:number,id:string){
    this._cart.updateCart(count,id).subscribe({
      next:(res)=>{
     if(count > 0){
      console.log(res)
      //to save data and show ...must be call cartDetails
      this.cartDetails= res
     }
     else{
      this.deleteItem(id)
     }

    }
    })
  }

  deleteItem(id:string){
    this._cart.deleteItem(id).subscribe({
      next:(res)=>{console.log(res)
     //to save data and show ...must be call cartDetails
      this.cartDetails= res
      }
    })
  }


  clearCart(){
    this._cart.clearCart().subscribe({
      next:(res)=>{console.log(res)
        this.isHaveItem = false;

      }
    })
  }


  
}
