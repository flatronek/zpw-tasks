import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BikeListComponent } from './bike-list.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    BikeListComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BikeListComponent]
})
export class AppModule { }
