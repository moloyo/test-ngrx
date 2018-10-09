import { Person } from './models/person';

export interface IAppState {
    readonly people: { people: Person[], selectedID?: number };
}
