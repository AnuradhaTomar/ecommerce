import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sharedService: SharedService) { }

  toggleSidebar() {
    this.sharedService.toggleSidebar();
  }
}
