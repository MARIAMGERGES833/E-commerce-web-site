import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsnavRoutingModule } from './brandsnav-routing.module';
import { BrandsnavComponent } from './brandsnav.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';


@NgModule({
  declarations: [
    BrandsnavComponent,
    BrandDetailsComponent
  ],
  imports: [
    CommonModule,
    BrandsnavRoutingModule
  ]
})
export class BrandsnavModule { }
