import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  locations!: Location[];

  constructor(
    locationService: LocationService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      this.locations = locationService.getAll();
    });
  }
}
