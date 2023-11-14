import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  signUp() {
    const userData = { name: this.name, email: this.email, password: this.password };
    this.authService.signUp(userData).subscribe((response) => {
      console.log('Signup successful', response);
    },
    (error) => {
      console.error('Signup failed', error);
    });
  }
}
