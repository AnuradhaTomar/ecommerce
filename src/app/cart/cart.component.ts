import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe((cartResponse: any) => {
      console.log("cartResponse", cartResponse);
      this.cartItems = cartResponse.data.products;
    });
  }

  removeFromCart(productId: string): void {
    console.log("productID", productId);
    const productIdNumber: any = productId;
    console.log("productIdNumber", productIdNumber);

    this.cartService.removeFromCart(productIdNumber).subscribe(() => {
      console.log('Product removed from cart');
      this.loadCart();
    });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => {
      console.log('Cart cleared');
      this.loadCart();
    });
  }

  calculateTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  }

  pay(): void {
    this.cartService.makePayment().subscribe((response: any) => {
      console.log('Payment successful:', response);
      this.clearCart();
    }, (error: any) => {
      console.error('Payment error:', error);
    });
  }
}
