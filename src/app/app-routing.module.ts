import { NotFoundedComponent } from './not-founded/not-founded.component';
import { NgModule } from '@angular/core';
import { RouterModule , Routes  } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrderComponent } from './all-order/all-order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategorynavComponent } from './categorynav/categorynav.component';
import { ProdnavComponent } from './prodnav/prodnav.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrandDetailsComponent } from './brandsnav/brand-details/brand-details.component';

const routes:Routes =[
  {path:"" , redirectTo: "home",pathMatch:"full" ,title :"Home"},
  {path:"home" ,canActivate:[authGuard], component:HomeComponent ,title :"Home"},
  {path: "categorynav" ,canActivate:[authGuard], component:CategorynavComponent  ,title:"Category"},
  {path:"allorders" ,canActivate:[authGuard], component:AllOrderComponent, title:"All order"},
  {path:"prodnav" ,canActivate:[authGuard], component:ProdnavComponent, title:"Products"},
  {path:"forgetpassword" , component:ForgetpasswordComponent, title:"forget password"},
  {path:"wishList" ,canActivate:[authGuard], component:WishlistComponent, title:"Wish list"},
  {path:"checkout/:cartId" ,canActivate:[authGuard], component:CheckoutComponent, title:"pay"},
  {path:"productDetails/:id" ,canActivate:[authGuard], component:ProductDetailsComponent, title:"Product Details"},
  {path:"signin" , component:SigninComponent,title :"sign in"},
  {path:"signup" , component:SignupComponent,title :"sign up"},
  {path: 'cart', loadChildren: ()=> import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'brandsnav', loadChildren: () => import('./brandsnav/brandsnav.module').then(m => m.BrandsnavModule) },
  { path:'brandDetails/:id', component: BrandDetailsComponent },




  {path:"**" ,component:NotFoundedComponent,title :"404 Not founded"},

];

@NgModule({
  imports :[RouterModule.forRoot(routes,{useHash:true})],
  exports:[RouterModule]

})
export class AppRoutingModule { }
