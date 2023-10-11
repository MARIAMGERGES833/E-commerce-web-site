import { Pipe, PipeTransform } from '@angular/core';
import { Prouducts } from './prouducts';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Prouducts[],searchKey: string): Prouducts[] {
    return products.filter((ele)=>ele.title.toLowerCase().includes(searchKey.toLowerCase()))
   }

}
