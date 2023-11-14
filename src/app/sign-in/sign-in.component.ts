import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent {
  email: string = ''; 
  password: string = ''; 

  constructor(private authService: AuthService) {}

  signIn() {
    const credentials = { email: this.email, password: this.password };
    this.authService.signIn(credentials).subscribe((response) => {
      console.log('Sigin successful', response);
    },
    (error) => {
      console.error('Sigin failed', error);
    })
  }
}
