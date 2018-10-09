import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleList = [
    new Person('Jorge', 'Lopez'),
    new Person('Martin', 'Pochoclo'),
    new Person('Brian', 'Gorrita')
  ];

  constructor() { }

  getAllPeople(): Observable<Person[]> {
    return of(this.peopleList);
  }
}
