import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AllitemService } from 'src/app/services/allitem.service';
import { AllItens } from 'src/app/shared/models/AllItems';

@Component({
  selector: 'app-add-items-modal',
  templateUrl: './add-items-modal.component.html',
  styleUrls: ['./add-items-modal.component.scss'],
})
export class AddItemsModalComponent {
  allItems!: AllItens[];

  constructor(allitemService: AllitemService, activatedRoute: ActivatedRoute) {
    let locationsObservable: Observable<AllItens[]>;

    activatedRoute.params.subscribe((params) => {
      locationsObservable = allitemService.getAll();
    });
    locationsObservable.subscribe((serverLocations) => {
      this.allItems = serverLocations;
    });
  }
}
