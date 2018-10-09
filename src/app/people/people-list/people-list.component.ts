import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from 'src/app/models/person';
import { IAppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PeopleActions from './../../actions/people.actions';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  public peopleList: Person[];
  public selectedID: number | undefined;

  constructor(private store: Store<IAppState>) {
    this.store.select('people').subscribe(value => {
      console.log(value);
      this.peopleList = value.people;
      this.selectedID = value.selectedID;
    });
  }

  selectPerson(index: number) {
    if (index !== this.selectedID) {
      this.store.dispatch(new PeopleActions.SetCurrentPerson(index));
    } else {
      this.store.dispatch(new PeopleActions.ClearCurrentPerson());
    }
  }

}
