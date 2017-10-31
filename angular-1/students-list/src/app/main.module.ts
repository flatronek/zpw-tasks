import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {GroupComponent} from './group.component';
import {StudentComponent} from './student/student.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    GroupComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [GroupComponent]
})
export class MainModule {
}
