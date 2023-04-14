import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  showNavBar = true;
  subscription: Subscription;
  hideNavbarLinks = '/login';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public nav: NavBarService
  ) {}

  showNav(): boolean {
    return !this.hideNavbarLinks.includes(this.router.url);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      console.log(params);

      const page = params['page'];
      if (page === 'login') {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    });
  }
}
