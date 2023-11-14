import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-top-up-dialog',
  templateUrl: './top-up-dialog.component.html',
})
export class TopUpDialogComponent {
  topUpAmount!: number;
  topUpDescription: string = '';

  constructor(public dialogRef: MatDialogRef<TopUpDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
