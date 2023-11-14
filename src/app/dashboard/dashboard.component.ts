
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.data;
    });
  }

  addToCart(product: any): void {
    const Product: Product = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity
      ,
      description: ''
    };

    this.cartService.addToCart(Product).subscribe(() => {
      console.log('Product added to cart');
    });
  }
}
