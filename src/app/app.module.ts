import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/common/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavComponent } from './components/partials/nav/nav.component';
import { CraftingComponent } from './components/pages/crafting/crafting.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';
import { MapComponent } from './components/pages/map/map.component';
import { LocationItemComponent } from './components/common/location-item/location-item.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ButtonComponent, HomeComponent, CraftingComponent, InventoryComponent, MapComponent, LocationItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
