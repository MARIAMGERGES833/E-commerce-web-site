import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-categorynav',
  templateUrl: './categorynav.component.html',
  styleUrls: ['./categorynav.component.css']
})
export class CategorynavComponent implements OnInit {

    allCategory :Category[]=[]
    constructor(private _productsService : ProductsService){

}

ngOnInit(): void {
this.getCategories()
}

getCategories(){
this._productsService.getCategories().subscribe({
next:(res)=>{
console.log(res)
this.allCategory = res.data
}
})
}
}
