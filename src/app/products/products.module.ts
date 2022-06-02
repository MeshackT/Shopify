import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllByProductsByDateComponent } from './view-all-by-products-by-date/view-all-by-products-by-date.component';
import { ViewAllByProductsByCategoryComponent } from './view-all-by-products-by-category/view-all-by-products-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    UpdateProductComponent,
    ViewAllByProductsByDateComponent,
    ViewAllByProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
