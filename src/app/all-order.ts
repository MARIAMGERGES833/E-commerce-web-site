export interface AllOrder {
//     totalOrderPrice : number,
//     cartItems : CartItem[],

    
// }
// interface CartItem {
// count : number,
// price : number,
// product:Product
// }
// interface Product{
// imageCover:string,
// title :string
    shippingAddress: ShippingAddress,
    totalOrderPrice: number,
    paymentMethodType: string,
    cartItems: Product[]
    updatedAt: string
  }
  interface ShippingAddress {
    details: string,
    phone: string,
    city: string
  }
  interface Product {
    count: number,
    price: number,
    product: InnerProduct
  }
  interface InnerProduct {
    title: string,
    imageCover: string,
    category: Category,
    brand: Brand,
    ratingsAverage: number
  }
  interface Category {
    name: string
  }
  interface Brand {
    name: string
  }
