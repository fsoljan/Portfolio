import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'portfolio-app';

  routes = [{ component: 'Portfolio', route: 'portfolio' },
    { component: 'About me', route: 'about-me' },
    { component: 'Hobbies', route: 'hobbies' }]

  activeRoute = this.routes[2].route;
}
