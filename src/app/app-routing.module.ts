import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.gaurd';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'sidebar', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent , },
  { path: 'signin', component: SigninComponent , },
  { path: 'forget-password', component: ForgetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'product', component:ProductListComponent, canActivate: [AuthGuard]},
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
