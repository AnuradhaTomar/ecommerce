import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductDialogComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TopUpDialogComponent } from './top-up-dialog/top-up-dialog.component';
import { TokenInterceptor } from './token.interceptor';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { ViewProductDialogComponent } from './view-product-dialog/view-product-dialog.component';
import { CartComponent } from './cart/cart.component';
// import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    ProductListComponent,
    AddProductDialogComponent,
    DeleteConfirmationDialogComponent,
    HeaderComponent,
    SidebarComponent,
    WalletComponent,
    TransactionComponent,
    TopUpDialogComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    ViewProductDialogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule, 
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
