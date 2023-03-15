import { Injectable } from '@angular/core';
import { sample_locations } from 'src/data';
import { Location } from '../shared/models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getAll(): Location[] {
    return sample_locations;
  }
}
