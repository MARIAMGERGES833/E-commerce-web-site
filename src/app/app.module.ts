import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrderComponent } from './all-order/all-order.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProdnavComponent } from './prodnav/prodnav.component';
import { CategorynavComponent } from './categorynav/categorynav.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



 

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    SearchPipe,
    MainSliderComponent,
    CheckoutComponent,
    AllOrderComponent,
    LoadingComponent,
    WishlistComponent,
    ProdnavComponent,
    CategorynavComponent,
    NotFoundedComponent,
    ForgetpasswordComponent,
   
    
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    MatProgressSpinnerModule,
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
