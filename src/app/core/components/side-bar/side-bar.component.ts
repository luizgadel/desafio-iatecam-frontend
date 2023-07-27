import { Component, OnInit } from '@angular/core';
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
    private userService: UserService
  ) {}

  logout() {
    console.log('a');
    this.userService.logout();
  }
}
