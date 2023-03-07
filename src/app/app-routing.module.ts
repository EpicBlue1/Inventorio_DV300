import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftingComponent } from './components/pages/crafting/crafting.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';
import { MapComponent } from './components/pages/map/map.component';

//wildcard (make sure its last route)
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Crafting/:searchTerm',
    component: CraftingComponent,
  },
  {
    path: 'Inventory/:searchTerm',
    component: InventoryComponent,
  },
  {
    path: 'Map',
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
