import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PeopleListComponent,
    AddPersonComponent
  ],
  declarations: [
    PeopleListComponent,
    AddPersonComponent
  ]
})
export class PeopleModule { }
