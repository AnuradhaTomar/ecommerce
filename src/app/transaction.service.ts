import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: any[] = [];

  constructor() { }

  getTransactions(): any[] {
    return this.transactions;
  }

  addTransaction(type: string, amount: number) {
    const transaction = { type, amount };
    this.transactions.push(transaction);
  }

  clearTransactions() {
    this.transactions = [];
  }

}
