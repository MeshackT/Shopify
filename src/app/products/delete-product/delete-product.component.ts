import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      data => {
        console.log(data);
        this.productId = data['id'];

      })
  }

}
