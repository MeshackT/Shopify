import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product> {
    const productURL = 'http://localhost:3000/product';

    return this.httpClient.get<Product>(productURL); //returns observable
  }
  getCategories(): Observable<Category> {
    const categoriesUrl = 'http://localhost:3000/category';

    return this.httpClient.get<Category>(categoriesUrl);//returns observable
  }

  createProduct(productBody: any): Observable<Product>
    {
    const productUrl = 'http://localhost:3000/product';
    return this.httpClient.post<Product>(productUrl, productBody);//returns observable
    
  }
  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + productId;//returns observable
    return this.httpClient.get<Product>(productUrl);

  }
  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);//returns observable

  }

  DeleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + productId;//returns observable
    return this.httpClient.delete<Product>(productUrl);

  }
  searchCategoryProducts(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/category' + categoryId;
    return this.httpClient.get<Product>(productUrl);//returns observable

  }
  searchDateProducts(date: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + date;
    return this.httpClient.get<Product>(productUrl);//returns observable

  }
  
}
