export interface Cart {
    numOfCartItems:number,
    data:Data,
}


interface Data{
    totalCartPrice:number,
    products:Products[],
    _id:string,

}

interface Products{
    price: number,
    count:number,
    product:Product,
   
}
interface Product{
    id:string,
    brand:Brand,
    category:Category,
    imageCover:string,
    title:string,
    ratingsAverage:number,
}

interface Brand{
    name:string,
    image:string,
}
interface Category{
    name:string,

}
