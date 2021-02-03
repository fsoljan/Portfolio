import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'portfolio-app';

  links = {
    1: { name: 'About me', route: 'app-about-me' },
    2: { name: 'Portfolio', route: 'app-portfolio' },
    3: { name: 'Hobbies', route: 'app-hobbies' }
  };

  activeRoute = this.links[2].route;
}
