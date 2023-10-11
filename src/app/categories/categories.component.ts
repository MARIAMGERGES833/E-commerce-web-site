import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true,
    margin:20,
  }
    allCategory :Category[]=[]
      constructor(private _productsService : ProductsService){

}

ngOnInit(): void {
  this.getCategories()
}

getCategories(){
this._productsService.getCategories().subscribe(
  {
next:(res)=>{
  console.log(res)
  this.allCategory = res.data
}
  }
)
}
}
