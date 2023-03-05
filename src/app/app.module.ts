import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/common/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavComponent } from './components/partials/nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ButtonComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
