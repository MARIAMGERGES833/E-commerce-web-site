import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../shared/service/cart.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls:['./checkout.component.css']
})
export class CheckoutComponent {

  shippingForm: FormGroup = new FormGroup({
    details: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
  })

  cartId : string =""
  constructor(private _cartService: CartService , private _activatedRoute :  ActivatedRoute) { 
this._activatedRoute.paramMap.subscribe((res : any)=>{
  this.cartId = res.params.cartId
  console.log(res.params)
})
  }

  handleOnPay() {
    console.log(this.shippingForm)
    this._cartService.paymentOnLine(this.cartId, this.shippingForm.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status == "success") {
          console.log(res.session.url)
          window.location.href = res.session.url
        }
      }
    })
  }

}
