import * as PeopleActions from './../actions/people.actions';
import { Person } from 'src/app/models/person';

const internalState: {people: Person[], selectedID?: number} = {
    people: [
        new Person('Jorge', 'Poroto')
    ]
};

export function peopleReducer(state = internalState, action: PeopleActions.Action) {
    switch (action.type) {
        case PeopleActions.ADD_PERSON:
            return { people: [...state.people, action.payload] };
        case PeopleActions.REMOVE_PERSON:
            state.people.splice(state.selectedID, 1);
            return { people: state.people };
        case PeopleActions.EDIT_PERSON:
            const people = state.people;
            people[state.selectedID] = action.payload;
            return { people: people };
        case PeopleActions.SET_CURRENT_PERSON:
            return { people: state.people, selectedID: action.payload};
        case PeopleActions.CLEAR_CURRENT_PERSON:
            return { people: state.people };
        default:
            return state;
    }
}
