import { Action } from './action';

export type Reducer<T> = (oldState: T, action: Action) => T;

const countReducer: Reducer<number> = (state: number = 0, action: Action) => {
    // logica
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }
};

const actionIncrement: Action = {type: 'INCREMENT'};
const actionDecrement: Action = {type: 'DECREMENT'};
const actionPlus: Action = {type: 'PLUS', payload: 2};

console.log(countReducer(0, actionIncrement));
console.log(countReducer(1, actionDecrement));
console.log(countReducer(1, actionPlus));
