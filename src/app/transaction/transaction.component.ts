import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: any = [];
  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getTransactions().subscribe((data: any) => {
      console.log("Data11",data.data.transactions)
      this.transactions = data.data.transactions;
    });
  }
}
