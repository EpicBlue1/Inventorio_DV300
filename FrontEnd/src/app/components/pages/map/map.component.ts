import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  locations!: Location[];

  divVisibility = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor(
    locationService: LocationService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Location[]>;

    activatedRoute.params.subscribe((params) => {
      foodsObservable = locationService.getAll();
    });
    foodsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations;
    });
  }

  counter(i: number) {
    return new Array(i);
  }

  showDiv(index: number): void {
    console.log('lol');

    this.divVisibility[index] = true;
  }

  hideDiv(index: number): void {
    console.log('lollos');

    this.divVisibility[index] = false;
  }
}
