import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {
  product: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private dialogRef: MatDialogRef<EditProductDialogComponent>,
    private productService: ProductService
  ) {
    this.product = data.product;
  }

  
  saveChanges() {
    this.productService.updateProduct(this.product).subscribe(updatedProduct => {
     this.dialogRef.close(updatedProduct);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
