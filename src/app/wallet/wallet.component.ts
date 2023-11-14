import { Component } from '@angular/core';
import { WalletService } from '../wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { TopUpDialogComponent } from '../top-up-dialog/top-up-dialog.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  balance: number = 0;
  transactions: any = [];

  ngOnInit() {
    this.walletService.getTransactions().subscribe((data: any[]) => {
      this.transactions = data;
    });
  }

  constructor(private walletService: WalletService, private dialog: MatDialog) {
    this.updateBalance();
    this.updateTransactions();
  }

  updateBalance(): void {
    this.walletService.getBalance().subscribe((balance: any) => {
      console.log("balance",balance)
      this.balance = balance.data.wallet.amount;
    });
  }

  updateTransactions(): void {
    this.walletService.getTransactions().subscribe((transactions: any[]) => {
      this.transactions = transactions;
    });
  }

  openTopUpDialog(): void {
    const dialogRef = this.dialog.open(TopUpDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: { amount: number, description: string }) => {
      if (result && result.amount) {
        this.topUp(result.amount, result.description);
      }
    });
    
  }

  topUp(amount: number, description: string): void {
    this.walletService.topUp(amount, description).subscribe(() => {
      this.updateBalance();
      this.updateTransactions();
    });
  }

  withdraw(amount: number): void {
    this.walletService.withdraw(amount).subscribe(() => {
      this.updateBalance();
      this.updateTransactions();
    });
  }

  getTransactions(): any {
    console.log("his.transactions",this.transactions)
    return this.transactions.data.transactions;
  }
}
