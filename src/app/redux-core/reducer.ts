import { Action } from './action';

export type Reducer<T> = (oldState: T, action: Action) => T;

const countReducer: Reducer<number> = (state: number = 0, action: Action) => {
    // logica
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    return state;
};

const actionIncrement: Action = {type: 'INCREMENT'};
const actionDecrement: Action = {type: 'DECREMENT'};

console.log(countReducer(0, actionIncrement));
console.log(countReducer(1, actionDecrement));
