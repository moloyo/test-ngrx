import { Action } from '@ngrx/store';
import { Person } from '../models/person';

export const ADD_PERSON = '[PERSON] Add';
export const EDIT_PERSON = '[PERSON] Edit';
export const REMOVE_PERSON = '[PERSON] Remove';
export const SET_CURRENT_PERSON = '[PERSON] Set Current';
export const CLEAR_CURRENT_PERSON = '[PERSON] Clear Current';

export class AddPerson implements Action {
    readonly type = ADD_PERSON;

    constructor(public payload: Person) {}
}

export class EditPerson implements Action {
    readonly type = EDIT_PERSON;

    constructor(public payload: Person) {}
}

export class RemovePerson implements Action {
    readonly type = REMOVE_PERSON;

    constructor() {}
}

export class SetCurrentPerson implements Action {
    readonly type = SET_CURRENT_PERSON;

    constructor(public payload: number) {}
}

export class ClearCurrentPerson implements Action {
    readonly type = CLEAR_CURRENT_PERSON;

    constructor() {}
}

export type Action = AddPerson | RemovePerson | EditPerson | SetCurrentPerson | ClearCurrentPerson;
