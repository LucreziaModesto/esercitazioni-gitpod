import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { RentedComponent } from './rented/rented.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    RentListComponent,
    RentedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
