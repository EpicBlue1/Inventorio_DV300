import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss'],
})
export class CraftingComponent {
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe();
  }
}
