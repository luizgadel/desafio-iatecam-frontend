import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-dev-iatecam';

  constructor(private router: Router) {}

  hasRoute(route: string) {
    return this.router.url.includes(route)
  }
}
