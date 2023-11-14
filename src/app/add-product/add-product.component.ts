import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductDialogComponent {
  newProduct: Product = {
    name: '', description: '', price: 0, quantity :0 ,
    _id: undefined
  };

  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) {}

  addProduct() {
    
    this.dialogRef.close(this.newProduct);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
