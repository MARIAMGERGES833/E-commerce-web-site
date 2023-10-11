import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsnavComponent } from './brandsnav.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: '', component: BrandsnavComponent },
  { path:'brandDetails/:id', component: BrandDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsnavRoutingModule { }
