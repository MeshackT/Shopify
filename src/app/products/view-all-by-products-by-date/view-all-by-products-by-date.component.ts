import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-by-products-by-date',
  templateUrl: './view-all-by-products-by-date.component.html',
  styleUrls: ['./view-all-by-products-by-date.component.css']
})
export class ViewAllByProductsByDateComponent implements OnInit {

  searchDate = '';

  constructor(
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(
      data => {
        console.log(data);
        this.searchDate = data['date'];

      })
  }

}
