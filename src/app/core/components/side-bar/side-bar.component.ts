import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  menus = [
    {
      name: "Início",
      icon: "home",
      route: "home"
    },
    {
      name: "Dashboard",
      icon: "assessment",
      route: "dashboard"
    }
  ]
  
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  logout() {
    console.log('a');
    this.userService.logout();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
