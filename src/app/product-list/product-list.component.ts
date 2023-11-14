import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Product } from './product.model';
import { ProductService } from '../product.service';
import { AddProductDialogComponent } from '../add-product/add-product.component';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { ViewProductDialogComponent } from '../view-product-dialog/view-product-dialog.component';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['name', 'description', 'price', 'quantity', 'actions'];
  private socket: any;

  constructor(private productService: ProductService, private dialog: MatDialog) {
    this.productService.getProducts().subscribe((data: any) => {
      data = data.data
      console.log("data",data)
      this.products = new MatTableDataSource<Product>(data);
    });
  
}
ngOnInit(): void {
    this.socket = io('http://localhost:3002');

    this.socket.on('newProductAdded', (message: Product) => {
      console.log("new product");
      alert("new product added")
      this.products.data.push(message);
      this.products._updateChangeSubscription();
    });

    this.socket.on('productUpdated', (updatedProduct: Product) => {
      alert("product updated")
      console.log("update product")
      const index = this.products.data.findIndex(p => p._id === updatedProduct._id);
      if (index !== -1) {
        this.products.data[index] = updatedProduct;
        this.products._updateChangeSubscription();
      }
    });

    this.socket.on('productDeleted', (productId: string) => {
      this.products.data = this.products.data.filter(p => p._id !== productId);
      this.products._updateChangeSubscription();
    });

    this.productService.getProducts().subscribe((data: any) => {
      data = data.data;
      this.products = new MatTableDataSource<Product>(data);
    });
  }
  
  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((newProduct: Product) => {
      if (newProduct) {
        this.productService.addProduct(newProduct).subscribe((addedProduct: Product) => {
          if (this.products) {
            this.products.data.push(addedProduct);
            this.products._updateChangeSubscription();
          }
        });
      }
    });
  }

  openViewProductDialog(product: Product) {
    const dialogRef = this.dialog.open(ViewProductDialogComponent, {
      width: '500px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
     
    });
  }

  openEditProductDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '500px',
      data: { product }
    });
  
    dialogRef.afterClosed().subscribe((editedProduct: Product) => {
      if (editedProduct) {
        console.log("editedProduct",editedProduct)
      
      }
    });
  }
  
  openDeleteConfirmationDialog(product: Product) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { product }
    });
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log("result",result)
        console.log("product",product)

        this.productService.deleteProduct(product._id).subscribe((response: any) => {
          if (response.success) {
          
            if (this.products) {
              this.products.data = this.products.data.filter(p => p._id !== product._id);
              this.products._updateChangeSubscription();
            }
          } else {
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
  
}
