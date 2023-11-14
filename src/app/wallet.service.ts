import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './config/config';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private transactions: any[] = [];
  private readonly walletApi = `${BASE_URL}/wallet`;
  constructor(private http: HttpClient) {}

  getBalance(): Observable<number> {
    return this.http.get<number>(`${this.walletApi}/balance`);
  }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.walletApi}/transactions`);
  }

  topUp(amount: number, description: string): Observable<any> {
    return this.http.post<any>(`${this.walletApi}/topup`, { amount, description });
  }

  withdraw(amount: number): Observable<any> {
    return this.http.post<any>(`${this.walletApi}/withdraw`, { amount });
  }
}
