import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_locations } from 'src/data';
import { LOCATIONS_URL } from '../shared/constants/urls';
import { Location } from '../shared/models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(LOCATIONS_URL);
  }
}
