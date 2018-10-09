import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import * as PeopleActions from './../../actions/people.actions';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  currentPerson: Person;

  constructor(private store: Store<IAppState>) {
    this.store.select('people').subscribe(value => {
      if (value.selectedID !== undefined) {
        this.currentPerson = value.people[value.selectedID];
      } else {
        this.currentPerson = undefined;
      }
    });
  }

  addPerson(nombre: string, apellido: string) {
    if (this.currentPerson) {
      this.store.dispatch(new PeopleActions.EditPerson(new Person(nombre, apellido)));
    } else {
      this.store.dispatch(new PeopleActions.AddPerson(new Person(nombre, apellido)));
    }
  }

  delPerson() {
    if (this.currentPerson) {
      this.store.dispatch(new PeopleActions.RemovePerson());
    }
  }
}
