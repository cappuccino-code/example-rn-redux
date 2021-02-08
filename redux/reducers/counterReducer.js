import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    SET_COUNTER
} from '../actionTypes'

/**
 * {@link https://redux.js.org/introduction/getting-started Redux Docs}.
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 * reducers act like event listeners
 */
export default function counterReducer(state = { counter: 0 }, action) { //default state is set in props
    // console.log(action.type, state)
    console.log(action)
    switch (action.type) {
        // to not reset the state of the rest of the application when changing it
        // spread in the rest of the state into the returned object by ...state
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 }
        case RESET_COUNTER:
            return { ...state, counter: 0 }
        case SET_COUNTER:
            return { ...state, counter: action.payload.value }
        default:
            return state
    }
}