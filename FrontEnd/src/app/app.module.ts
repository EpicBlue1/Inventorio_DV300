import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/common/button/button.component';
import { CraftingItemComponent } from './components/common/crafting-item/crafting-item.component';
import { CraftingReqComponent } from './components/common/crafting-req/crafting-req.component';
import { GridBlockComponent } from './components/common/grid-block/grid-block.component';
import { InventoryItemComponent } from './components/common/inventory-item/inventory-item.component';
import { LocationItemComponent } from './components/common/location-item/location-item.component';
import { CraftingComponent } from './components/pages/crafting/crafting.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';
import { MapComponent } from './components/pages/map/map.component';
import { FilterSearchComponent } from './components/partials/filter-search/filter-search.component';
import { NavComponent } from './components/partials/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    HomeComponent,
    CraftingComponent,
    InventoryComponent,
    MapComponent,
    LocationItemComponent,
    GridBlockComponent,
    FilterSearchComponent,
    InventoryItemComponent,
    CraftingItemComponent,
    CraftingReqComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
