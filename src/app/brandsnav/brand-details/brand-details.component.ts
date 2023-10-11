import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/brands.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {
   brandDetails : any ={}
  brandId : string =""
  constructor(private _activatedRoute:ActivatedRoute,
    private _brandsService:BrandsService,
    ){

  }
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      console.log(res.params.id)
      this.brandId = res.params.id
      this._brandsService.getBrandDetails(this.brandId).subscribe({
next: (res)=>{
  console.log(res.data)
this.brandDetails=res.data
}

      })
    })

  }

 


}
