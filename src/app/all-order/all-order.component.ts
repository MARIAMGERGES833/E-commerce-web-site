import { Component } from '@angular/core';
import { AllOrderService } from '../all-order.service';
import jwtDecode from 'jwt-decode';
import { AllOrder } from '../all-order';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent {
  orders!: AllOrder[]
  data: any;
  constructor (
    private _allOrderService:AllOrderService
  ) {}
  ngOnInit(): void {
    let token: any = jwtDecode(`${localStorage.getItem('userToken')}`)
    console.log('userToken: ', token.id);
    this._allOrderService.allOrder(token.id).subscribe({
      next: res => {
        this.orders = res
      },
      error: err => console.log(err)
    })
  }
   }

