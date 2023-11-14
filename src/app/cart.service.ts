// cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './config/config';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = `${BASE_URL}/cart`;
  private readonly walletApi = `${BASE_URL}/wallet`;

  constructor(private http: HttpClient) {}

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cartUrl);
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cartUrl, product);
  }

  removeFromCart(productId: number): Observable<void> {
    const url = `${this.cartUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.cartUrl);
  }

  makePayment(): Observable<any> {
    return this.http.post<void>(`${this.walletApi}/transactions`, {});
  }
  
}
