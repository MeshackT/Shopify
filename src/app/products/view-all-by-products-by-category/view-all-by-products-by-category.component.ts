import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-by-products-by-category',
  templateUrl: './view-all-by-products-by-category.component.html',
  styleUrls: ['./view-all-by-products-by-category.component.css']
})
export class ViewAllByProductsByCategoryComponent implements OnInit {

  searchCategory = '';

  constructor(
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(
      data => {
        console.log(data);
        this.searchCategory = data['category'];

      })
  }

}
