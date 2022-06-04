import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-by-products-by-category',
  templateUrl: './view-all-by-products-by-category.component.html',
  styleUrls: ['./view-all-by-products-by-category.component.css']
})
export class ViewAllByProductsByCategoryComponent implements OnInit {

/*  searchCategory = '';
*/  searchCategory: any;
  productList: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      data => {
        console.log(data);
        this.searchCategory = data['id'];

      })
    this.productService.searchCategoryProducts(this.searchCategory).subscribe(
      categoryData => {
        console.log(categoryData);
        this.productList = categoryData;
      })

  }

}
