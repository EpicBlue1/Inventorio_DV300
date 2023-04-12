import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  @ViewChild('Blocks') Blocks: ElementRef;

  icon: any = ' ';

  items = [
    { label: 'Item 1', disabled: false },
    { label: 'Item 2', disabled: false },
    { label: 'Item 3', disabled: false },
    { label: 'Item 4', disabled: false },
    { label: 'Item 5', disabled: false },
    { label: 'Item 6', disabled: false },
    { label: 'Item 7', disabled: false },
    { label: 'Item 8', disabled: false },
    { label: 'Item 9', disabled: false },
  ];

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
    let locationsObservable: Observable<Location[]>;

    activatedRoute.params.subscribe((params) => {
      locationsObservable = locationService.getAll();
    });
    locationsObservable.subscribe((serverLocations) => {
      this.locations = serverLocations;

      const divElements = this.Blocks.nativeElement.querySelectorAll('div');
      console.log(this.locations);

      this.locations.forEach((item) => {
        const divElement = divElements[item.index];
        divElement.style.backgroundImage = `url(../../../../assets/${item.icon})`;
      });
    });
  }

  ngAfterViewInit() {}

  counter(i: number) {
    return new Array(i);
  }

  showDiv(index: number): void {
    console.log(this.locations);

    this.divVisibility[index] = true;
  }

  hideDiv(index: number): void {
    console.log('lollos');

    this.divVisibility[index] = false;
  }

  removeFunct(index: number) {
    this.divVisibility[index] = false;

    this.items[index].disabled = true;
  }
}
