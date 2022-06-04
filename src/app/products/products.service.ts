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
  /////////////////////get all products and get all category/////////////////////////////
  getAllProducts(): Observable<Product> {
    const productURL = 'http://localhost:3000/product';

    return this.httpClient.get<Product>(productURL); //returns observable
  }
  getCategories(): Observable<Category> {
    const categoriesUrl = 'http://localhost:3000/category';

    return this.httpClient.get<Category>(categoriesUrl);//returns observable
  }
  ///////////////////////////Create Product//////////////////////////////////////
  createProduct(productBody: any): Observable<Product>
    {
    const productUrl = 'http://localhost:3000/product';
    return this.httpClient.post<Product>(productUrl, productBody);//returns observable
    
  }
  //////////////////view product///////////////////////////////////////////
  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/'+productId;//returns observable
    return this.httpClient.get<Product>(productUrl);

  }
  /////////////////update product//////////////////////////////////////
  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);//returns observable

  }
  ////////////////////delet product///////////////////////
  DeleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product' + productId;//returns observable
    return this.httpClient.delete<Product>(productUrl);

  }
  /////////////////////search product by category/////////////////////////////////
  searchCategoryProducts(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product?categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl);//returns observable

  }

  //////////////////////////search product by date///////////////////////////////
  searchDateProducts(date: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product?categoryId=' + date;
    return this.httpClient.get<Product>(productUrl);//returns observable

  }
  
}
