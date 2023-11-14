import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("this.authService.isAuthenticated()", this.authService.isAuthenticated());
      return true;
    } else {
      console.log("this.authService.isAuthenticated()111", this.authService.isAuthenticated());
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
