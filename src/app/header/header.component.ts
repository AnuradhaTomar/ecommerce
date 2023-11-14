import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sharedService: SharedService, private router: Router) { }

  toggleSidebar() {
    this.sharedService.toggleSidebar();
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('User logged out');
    this.router.navigate(['/signin']);
  }
}
