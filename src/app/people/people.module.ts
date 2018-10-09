import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PeopleListComponent
  ],
  declarations: [
    PeopleListComponent
  ]
})
export class AppMainModule { }
