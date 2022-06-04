import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


/*  searchCategory = '';
*/  searchCategory: any;
  productList: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService) { }

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
