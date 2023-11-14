import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './config/config';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = `${BASE_URL}/products`;

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, newProduct);
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    const url = `${this.productsUrl}/${updatedProduct._id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

  deleteProduct(productId: string): Observable<any> {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.delete<any>(url);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
