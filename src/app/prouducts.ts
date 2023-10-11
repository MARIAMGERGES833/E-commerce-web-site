export interface Prouducts {
    imageCover:string,
    title:string,
    price:number,
    ratingsAverage:number,
    category:Category,
    brand:Brand,
    id:string,
    description?: string,
    images?:string[]
}


interface Category{
    name:string,
}
interface Brand{
    name:string,

}

