import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { ProductAdditionComponent } from './components/product-addition/product-addition.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartPageComponent,
    ProductAdditionComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartPageModule { }
