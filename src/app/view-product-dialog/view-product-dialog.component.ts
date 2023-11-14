import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-view-product-dialog',
  templateUrl: './view-product-dialog.component.html',
  styleUrls: ['./view-product-dialog.component.css']
})
export class ViewProductDialogComponent {
  product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private dialogRef: MatDialogRef<ViewProductDialogComponent>
  ) {
    this.product = data.product;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
