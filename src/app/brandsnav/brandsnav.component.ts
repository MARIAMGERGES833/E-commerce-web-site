import { Component } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brandsnav',
  templateUrl: './brandsnav.component.html',
  styleUrls: ['./brandsnav.component.css']
})
export class BrandsnavComponent {
  brandImg : any = '';
  brandDetail :any ="";
  constructor(private _brandsService : BrandsService,
    private _router:Router){
     
   this.getBrands()
  }


  getBrands(){
   this._brandsService.getBrands().subscribe({
     next:(res)=>{
       console.log(res.data)
       this.brandImg = res.data
     }
     })
  }

  
  getBrandDetails(id:string){
    this._brandsService.getBrandDetails(id).subscribe({
      next:(res) =>{
        console.log(res.data)
        this.brandDetail=res.data
      }
    })
  }
}
