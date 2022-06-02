import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllByProductsByCategoryComponent } from './view-all-by-products-by-category/view-all-by-products-by-category.component';
import { ViewAllByProductsByDateComponent } from './view-all-by-products-by-date/view-all-by-products-by-date.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create-product', component: AddProductComponent },
  { path: 'search', component: ViewAllByProductsByCategoryComponent },
  { path: 'search-date', component: ViewAllByProductsByDateComponent },
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
